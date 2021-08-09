using Abp.Application.Services;
using Abp.Application.Services.Dto;
using System;
using TinTucCongNghe._Business.Dto;

namespace TinTucCongNghe._Business.TheLoais
{
    public interface ITheLoaiAppService :
            ICrudAppService< //Defines CRUD methods
            TheLoaiDto, //Used to show books
            Guid, //Primary key of the book entity
            PagedAndSortedResultRequestDto, //Used for paging/sorting
            CreateTheLoaiDto,
            CreateTheLoaiDto> //Used to create/update a book    
    {
    }
}
