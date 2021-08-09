using Abp.Application.Services;
using Abp.Application.Services.Dto;
using System;
using TinTucCongNghe._Business.Dto;

namespace TinTucCongNghe._Business
{
    public interface IBaiVietAppService :
            ICrudAppService< //Defines CRUD methods
            BaiVietDto, //Used to show books
            Guid, //Primary key of the book entity
            PagedAndSortedResultRequestDto, //Used for paging/sorting
            CreateBaiVietDto,
            CreateBaiVietDto> //Used to create/update a book    
    {

    }
}
