using Abp.Domain.Entities.Auditing;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace TinTucCongNghe._Business.Entities
{
    public class BaiViet : AuditedAggregateRoot<Guid>
    {
        public virtual TheLoai Theloai { get; set; }
        [ForeignKey("TheLoai")]
        public Guid TheLoaiID { get; set; }     
        public string Title { get; set; }
        public string Search { get; set; }
        public string Content { get; set; }  // phân chi tiết
        public string imgSrc { get; set; } // ảnh
        public string Description { get; set; }        //tom tắt và chèn hình ảnh vào.
        public Boolean Status { get; set; }
        public Boolean isDelete { get; set; }
    }
}
