using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using TinTucCongNghe.EntityFrameworkCore;
using TinTucCongNghe.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace TinTucCongNghe.Web.Tests
{
    [DependsOn(
        typeof(TinTucCongNgheWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class TinTucCongNgheWebTestModule : AbpModule
    {
        public TinTucCongNgheWebTestModule(TinTucCongNgheEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(TinTucCongNgheWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(TinTucCongNgheWebMvcModule).Assembly);
        }
    }
}