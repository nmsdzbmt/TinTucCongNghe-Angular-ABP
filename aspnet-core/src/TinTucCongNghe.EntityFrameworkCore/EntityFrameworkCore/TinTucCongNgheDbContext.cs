using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using TinTucCongNghe.Authorization.Roles;
using TinTucCongNghe.Authorization.Users;
using TinTucCongNghe.MultiTenancy;
using TinTucCongNghe._Business;
using TinTucCongNghe._Business.Entities;

namespace TinTucCongNghe.EntityFrameworkCore
{
    public class TinTucCongNgheDbContext : AbpZeroDbContext<Tenant, Role, User, TinTucCongNgheDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<BaiViet> Baiviets { get; set; }
        public DbSet<TheLoai> Theloais { get; set; }
        public TinTucCongNgheDbContext(DbContextOptions<TinTucCongNgheDbContext> options)
            : base(options)
        {
        }
    }
}
