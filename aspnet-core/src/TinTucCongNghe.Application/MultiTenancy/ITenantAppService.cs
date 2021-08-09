using Abp.Application.Services;
using TinTucCongNghe.MultiTenancy.Dto;

namespace TinTucCongNghe.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

