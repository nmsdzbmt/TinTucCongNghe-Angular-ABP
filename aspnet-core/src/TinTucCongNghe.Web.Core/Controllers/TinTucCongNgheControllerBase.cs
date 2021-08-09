using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace TinTucCongNghe.Controllers
{
    public abstract class TinTucCongNgheControllerBase: AbpController
    {
        protected TinTucCongNgheControllerBase()
        {
            LocalizationSourceName = TinTucCongNgheConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
