using Abp.MultiTenancy;
using TinTucCongNghe.Authorization.Users;

namespace TinTucCongNghe.MultiTenancy
{
    public class Tenant : AbpTenant<User>
    {
        public Tenant()
        {            
        }

        public Tenant(string tenancyName, string name)
            : base(tenancyName, name)
        {
        }
    }
}
