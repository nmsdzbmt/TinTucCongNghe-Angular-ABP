using Abp.Authorization;
using TinTucCongNghe.Authorization.Roles;
using TinTucCongNghe.Authorization.Users;

namespace TinTucCongNghe.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
