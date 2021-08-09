using System.Threading.Tasks;
using Abp.Application.Services;
using TinTucCongNghe.Sessions.Dto;

namespace TinTucCongNghe.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
