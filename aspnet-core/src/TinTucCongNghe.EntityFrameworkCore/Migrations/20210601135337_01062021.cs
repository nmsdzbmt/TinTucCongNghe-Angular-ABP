using Microsoft.EntityFrameworkCore.Migrations;

namespace TinTucCongNghe.Migrations
{
    public partial class _01062021 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "imgSrc",
                table: "Baiviets",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "imgSrc",
                table: "Baiviets");
        }
    }
}
