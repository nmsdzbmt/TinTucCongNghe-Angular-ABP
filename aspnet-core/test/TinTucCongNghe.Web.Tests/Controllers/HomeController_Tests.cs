using System.Threading.Tasks;
using TinTucCongNghe.Models.TokenAuth;
using TinTucCongNghe.Web.Controllers;
using Shouldly;
using Xunit;

namespace TinTucCongNghe.Web.Tests.Controllers
{
    public class HomeController_Tests: TinTucCongNgheWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}