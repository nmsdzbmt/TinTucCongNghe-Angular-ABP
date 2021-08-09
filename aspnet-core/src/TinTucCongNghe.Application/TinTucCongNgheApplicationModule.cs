using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using TinTucCongNghe.Authorization;

namespace TinTucCongNghe
{
    [DependsOn(
        typeof(TinTucCongNgheCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class TinTucCongNgheApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<TinTucCongNgheAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(TinTucCongNgheApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
