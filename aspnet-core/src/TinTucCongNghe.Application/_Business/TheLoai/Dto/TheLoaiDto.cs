using Abp.Application.Services.Dto;
using System;

namespace TinTucCongNghe._Business.Dto
{
    public class TheLoaiDto : AuditedEntityDto<Guid>
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string NameSearch { get; set; }
        public string Slug { get; set; }
        public int Location { get; set; }
        public Boolean Status { get; set; }
        public Boolean isDelete { get; set; }
        
    }
}
