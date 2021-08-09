using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using TinTucCongNghe.Configuration.Dto;

namespace TinTucCongNghe.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : TinTucCongNgheAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
