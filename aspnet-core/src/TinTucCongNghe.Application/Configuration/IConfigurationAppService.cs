using System.Threading.Tasks;
using TinTucCongNghe.Configuration.Dto;

namespace TinTucCongNghe.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
