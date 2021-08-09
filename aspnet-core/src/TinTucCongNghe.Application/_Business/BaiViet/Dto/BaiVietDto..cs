using Abp.Application.Services.Dto;
using System;
using System.ComponentModel.DataAnnotations;

namespace TinTucCongNghe._Business.Dto
{
    public class BaiVietDto : AuditedEntityDto<Guid>
    {
        [Required]
        public virtual Guid? TheLoaiID { get; set; }
        public string Title { get; set; }
        public string Search { get; set; }
        public string Content { get; set; }
        public string imgSrc { get; set; }
        public string Description { get; set; }
        [Required]
        public Boolean Status { get; set; }
        [Required]
        public Boolean isDelete { get; set; }
    }
        
}
