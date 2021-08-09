using Abp.Application.Services.Dto;

namespace TinTucCongNghe.Roles.Dto
{
    public class PagedRoleResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}

