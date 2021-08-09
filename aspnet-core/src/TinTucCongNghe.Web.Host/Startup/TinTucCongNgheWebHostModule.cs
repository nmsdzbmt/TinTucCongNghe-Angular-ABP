using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using TinTucCongNghe.Configuration;

namespace TinTucCongNghe.Web.Host.Startup
{
    [DependsOn(
       typeof(TinTucCongNgheWebCoreModule))]
    public class TinTucCongNgheWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public TinTucCongNgheWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(TinTucCongNgheWebHostModule).GetAssembly());
        }
    }
}
