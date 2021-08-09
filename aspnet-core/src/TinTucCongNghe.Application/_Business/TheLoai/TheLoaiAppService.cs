using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using System;
using TinTucCongNghe._Business.Dto;
using TinTucCongNghe._Business.Entities;
using TinTucCongNghe._Business.TheLoais;

namespace TinTucCongNghe._Business
{
    public class TheLoaiAppService :
       CrudAppService<
           TheLoai, //The Book entity
           TheLoaiDto, //Used to show books
           Guid, //Primary key of the book entity
           PagedAndSortedResultRequestDto, //Used for paging/sorting
           CreateTheLoaiDto>, //Used to create/update a book
       ITheLoaiAppService
    {
        public TheLoaiAppService(IRepository<TheLoai, Guid> repository)
           : base(repository)
        {
        }
    }
}
