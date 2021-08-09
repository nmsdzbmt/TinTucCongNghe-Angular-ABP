using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace TinTucCongNghe.EntityFrameworkCore
{
    public static class TinTucCongNgheDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<TinTucCongNgheDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<TinTucCongNgheDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
