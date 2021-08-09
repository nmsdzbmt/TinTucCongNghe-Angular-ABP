using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using TinTucCongNghe.Configuration;
using TinTucCongNghe.Web;

namespace TinTucCongNghe.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class TinTucCongNgheDbContextFactory : IDesignTimeDbContextFactory<TinTucCongNgheDbContext>
    {
        public TinTucCongNgheDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<TinTucCongNgheDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            TinTucCongNgheDbContextConfigurer.Configure(builder, configuration.GetConnectionString(TinTucCongNgheConsts.ConnectionStringName));

            return new TinTucCongNgheDbContext(builder.Options);
        }
    }
}
