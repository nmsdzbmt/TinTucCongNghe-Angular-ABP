using AutoMapper;
using TinTucCongNghe._Business.Entities;

namespace TinTucCongNghe._Business.Dto
{
    public class TheLoaiMapProfile : Profile
    {
        public TheLoaiMapProfile()
        {
            CreateMap<TheLoai, TheLoaiDto>();
            CreateMap<CreateTheLoaiDto, TheLoai>();
        }

        //private void CreateMap<T1, T2>()
        //{
        //    throw new NotImplementedException();
        //}
    }
}
