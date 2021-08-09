using Microsoft.Extensions.Configuration;
using Castle.MicroKernel.Registration;
using Abp.Events.Bus;
using Abp.Modules;
using Abp.Reflection.Extensions;
using TinTucCongNghe.Configuration;
using TinTucCongNghe.EntityFrameworkCore;
using TinTucCongNghe.Migrator.DependencyInjection;

namespace TinTucCongNghe.Migrator
{
    [DependsOn(typeof(TinTucCongNgheEntityFrameworkModule))]
    public class TinTucCongNgheMigratorModule : AbpModule
    {
        private readonly IConfigurationRoot _appConfiguration;

        public TinTucCongNgheMigratorModule(TinTucCongNgheEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbSeed = true;

            _appConfiguration = AppConfigurations.Get(
                typeof(TinTucCongNgheMigratorModule).GetAssembly().GetDirectoryPathOrNull()
            );
        }

        public override void PreInitialize()
        {
            Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(
                TinTucCongNgheConsts.ConnectionStringName
            );

            Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
            Configuration.ReplaceService(
                typeof(IEventBus), 
                () => IocManager.IocContainer.Register(
                    Component.For<IEventBus>().Instance(NullEventBus.Instance)
                )
            );
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(TinTucCongNgheMigratorModule).GetAssembly());
            ServiceCollectionRegistrar.Register(IocManager);
        }
    }
}
