using Abp.AutoMapper;
using TinTucCongNghe.Authentication.External;

namespace TinTucCongNghe.Models.TokenAuth
{
    [AutoMapFrom(typeof(ExternalLoginProviderInfo))]
    public class ExternalLoginProviderInfoModel
    {
        public string Name { get; set; }

        public string ClientId { get; set; }
    }
}
