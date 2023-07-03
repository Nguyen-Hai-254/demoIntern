'use strict';
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Posts', [{
            title: 'Chiến tranh Ukraine & Nga',
            content: 'Ngày 19-6, truyền thông Ukraine tuyên bố quân đội nước này đang tiến quân và đạt được một số thành công ở Tavria. Khu vực này ở phía nam Ukraine, nằm giữa bờ đông sông Dnipro và phía bắc bán đảo Crimea.',
            userId: '1',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            title: 'Nắng nóng kéo dài tại miền Bắc',
            content: 'Miền Bắc và Trung Bộ đang trong đợt nắng nóng kéo dài nhất từ đầu năm với mức nhiệt nhiều nơi xấp xỉ 40 độ. Tháng 7 này, nhiệt độ tăng 0,5-1 độ và khả năng có 1-2 cơn bão trên Biển Đông.',
            userId: '1',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            title: `Giá vàng nhẫn và vàng miếng cùng nhau đi xuống`,
            content: `Chốt phiên hôm nay, giá vàng nhẫn 9999 loại 1-5 chỉ được SJC niêm yết tại TP.HCM ở mức 55,1-56,1 triệu đồng/lượng (mua vào - bán ra), giảm 100 nghìn đồng/lượng ở cả chiều mua vào và bán ra so với kết phiên hôm qua.

            Vàng nhẫn 9999 loại 0,5 chỉ được SJC mua - bán ở mức giá 55,1-56,2 triệu đồng/lượng, cũng giảm 100 nghìn đồng/lượng ở cả 2 chiều so với kết phiên hôm qua.`,
            userId: '2',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            title: 'TT-Huế chi hơn 1.000 tỷ đồng xây cầu vượt qua đầm phá lớn nhất Đông Nam Á',
            content: `Chiều 30/6, Văn phòng HĐND tỉnh TT-Huế cho biết, HĐND tỉnh vừa thông qua chủ trương đầu tư dự án cầu vượt qua phá Tam Giang nối thị trấn Phú Đa đi xã Vinh Xuân, huyện Phú Vang.

            Theo đó, dự án cầu qua phá Tam Giang có chiều dài toàn tuyến khoảng 3km, bao gồm cầu vượt phá Tam Giang dài khoảng 1,4km; rộng 15,5m và đường dẫn 2 đầu cầu dài khoảng 1,6km. 
            
            Tổng mức đầu tư dự kiến hơn 1.000 tỷ đồng từ nguồn vốn đầu tư ngân sách tỉnh. Dự án sẽ khởi công trong năm 2024 và hoàn thành sau 4 năm xây dựng để đưa vào sử dụng.`,
            userId: '2',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
