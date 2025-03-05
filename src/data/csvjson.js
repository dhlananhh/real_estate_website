const data = [
  {
    "title": "À La Carte Hotel",
    "price": "2,25 tỷ",
    "address": "Đường Dương Đình Nghệ, Phường Phước Mỹ, Sơn Trà, Đà Nẵng.",
    "area": "22 m2 - 50 m2 - 63 m2 - 135 m2"
  },
  {
    "title": "Ariyana Lakeside Văn Quán (Hesco Văn Quán)",
    "price": "N/A",
    "address": "Nguyễn Khuyến, Phường Văn Quán, quận Hà Đông, Hà Nội",
    "area": "69m2 – 73m2 – 88m2 – 89m2 – 90m2 – 95m2 -111m2"
  },
  {
    "title": "Asiana Riverside (Shizen Home)",
    "price": "N/A",
    "address": "Đường Bến Nghé, phường Tân Thuận Đông, quận 7, thành phố Hồ Chí Minh",
    "area": "45;90"
  },
  {
    "title": "Astral City",
    "price": "295 triệu",
    "address": "Mặt tiền Quốc lộ 13, TP Thuận An, Tỉnh Bình Dương",
    "area": "45;90"
  },
  {
    "title": "Athena Monopoly",
    "price": "3,3 - 3,7 tỷ",
    "address": "Phường Vinh Tân, Thành phố Vinh, Nghệ An",
    "area": "Không có thông tin"
  },
  {
    "title": "Chung cư Huỳnh Tấn Phát",
    "price": "1,7 tỷ",
    "address": "Đường Huỳnh Tấn Phát, Phường Phú Thuận, Quận 7, Hồ Chí Minh",
    "area": "50m2 – 90 m2"
  },
  {
    "title": "Green Center (Làng sinh thái golf)",
    "price": "2,95 - 6,6 tỷ",
    "address": "xã Tân Mỹ, huyện Đức Hòa, tỉnh Long An.",
    "area": "Không có thông tin"
  },
  {
    "title": "Khu dân cư Bảo Thịnh Residence",
    "price": "6 tỷ",
    "address": "Hà Huy Giáp, Phường Thạnh Xuân, Quận 12, TP.Hồ Chí Minh",
    "area": "250m2 - 280m2"
  },
  {
    "title": "Khu đô thị Phương Đông Vân Đồn",
    "price": "2 tỷ",
    "address": "Xã Đông Xá, đặc khu kinh tế Vân Đồn, Quảng Ninh",
    "area": "87;120;140;200;300;500"
  },
  {
    "title": "N03-T6 - Khu đô thị Ngoại Giao Đoàn",
    "price": "3,8 tỷ",
    "address": "Lô N03T6 Khu Ngoại Giao Đoàn, P.Xuân Tảo, Q.Bắc Từ Liêm, TP Hà Nội",
    "area": "Không có thông tin"
  },
  {
    "title": "Park View Apartment",
    "price": "1 tỷ",
    "address": "Đường Bùi Hữu Nghĩa, Phường Bình Hòa, Thuận An, Bình Dương.",
    "area": "43m2-52m2 -59m2 -65m2 -68m2 -83 m2"
  },
  {
    "title": "Parkview Iris Tower",
    "price": "N/A",
    "address": "Đường Nguyễn Du Thành phố Thuận An, Tỉnh Bình Dương",
    "area": "Không có thông tin"
  },
  {
    "title": "The Landmark 81 - Khu đô thị Vinhomes Central Park",
    "price": "4,9 - 22 tỷ",
    "address": "Đường Điện Biên Phủ, Phường 22, Quận Bình Thạnh, Thành phố Hồ Chí Minh",
    "area": "54-55-66m2\n78-87-90-94m2\n106-109-133-145m2\n144-171-172-173-186-192-249-258-269-407-420-431m2"
  },
  {
    "title": "The Vista An Phú",
    "price": "4,3 tỷ",
    "address": "628C Xa lộ Hà Nội, phường An Phú, quận 2, TP Thủ Đức, TP HCM",
    "area": "101m2 - 221 m2"
  },
  {
    "title": "101 Láng Hạ",
    "price": "2,3 - 4,6 tỷ",
    "address": "Số 101 Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Hà Nội",
    "area": "76;79;82;83;116;125"
  },
  {
    "title": "108 Nguyễn Trãi",
    "price": "11,2 tỷ",
    "address": "Số 108 Nguyễn Trãi, Phường Thượng Đình, Quận Thanh Xuân, Hà Nội",
    "area": "87;87,3;88,3;91;97,85;108"
  },
  {
    "title": "113 Trung Kính",
    "price": "3 - 3,5 tỷ",
    "address": "Số 113 Trung Kính, Phường Yên Hòa, Quận Cầu Giấy, Hà Nội",
    "area": "94;109;110;128;150"
  },
  {
    "title": "12 View",
    "price": "950 triệu - 1,6 tỷ",
    "address": "Đường Phan Văn Hớn, Phường Tân Thới Nhất, Quận 12, Thành phố Hồ Chí Minh",
    "area": "55;73;84;92"
  },
  {
    "title": "À La Carte Hotel",
    "price": "2,25 tỷ",
    "address": "Đường Dương Đình Nghệ, Phường Phước Mỹ, Sơn Trà, Đà Nẵng.",
    "area": "22 m2 - 50 m2 - 63 m2 - 135 m2"
  },
  {
    "title": "Ariyana Lakeside Văn Quán (Hesco Văn Quán)",
    "price": "N/A",
    "address": "Nguyễn Khuyến, Phường Văn Quán, quận Hà Đông, Hà Nội",
    "area": "69m2 – 73m2 – 88m2 – 89m2 – 90m2 – 95m2 -111m2"
  },
  {
    "title": "Asiana Riverside (Shizen Home)",
    "price": "N/A",
    "address": "Đường Bến Nghé, phường Tân Thuận Đông, quận 7, thành phố Hồ Chí Minh",
    "area": "45;90"
  },
  {
    "title": "Astral City",
    "price": "295 triệu",
    "address": "Mặt tiền Quốc lộ 13, TP Thuận An, Tỉnh Bình Dương",
    "area": "45;90"
  },
  {
    "title": "Athena Monopoly",
    "price": "3,3 - 3,7 tỷ",
    "address": "Phường Vinh Tân, Thành phố Vinh, Nghệ An",
    "area": "Không có thông tin"
  },
  {
    "title": "Chung cư Huỳnh Tấn Phát",
    "price": "1,7 tỷ",
    "address": "Đường Huỳnh Tấn Phát, Phường Phú Thuận, Quận 7, Hồ Chí Minh",
    "area": "50m2 – 90 m2"
  },
  {
    "title": "Green Center (Làng sinh thái golf)",
    "price": "2,95 - 6,6 tỷ",
    "address": "xã Tân Mỹ, huyện Đức Hòa, tỉnh Long An.",
    "area": "Không có thông tin"
  },
  {
    "title": "Khu dân cư Bảo Thịnh Residence",
    "price": "6 tỷ",
    "address": "Hà Huy Giáp, Phường Thạnh Xuân, Quận 12, TP.Hồ Chí Minh",
    "area": "250m2 - 280m2"
  },
  {
    "title": "Khu đô thị Phương Đông Vân Đồn",
    "price": "2 tỷ",
    "address": "Xã Đông Xá, đặc khu kinh tế Vân Đồn, Quảng Ninh",
    "area": "87;120;140;200;300;500"
  },
  {
    "title": "N03-T6 - Khu đô thị Ngoại Giao Đoàn",
    "price": "3,8 tỷ",
    "address": "Lô N03T6 Khu Ngoại Giao Đoàn, P.Xuân Tảo, Q.Bắc Từ Liêm, TP Hà Nội",
    "area": "Không có thông tin"
  },
  {
    "title": "Park View Apartment",
    "price": "1 tỷ",
    "address": "Đường Bùi Hữu Nghĩa, Phường Bình Hòa, Thuận An, Bình Dương.",
    "area": "43m2-52m2 -59m2 -65m2 -68m2 -83 m2"
  },
  {
    "title": "Parkview Iris Tower",
    "price": "N/A",
    "address": "Đường Nguyễn Du Thành phố Thuận An, Tỉnh Bình Dương",
    "area": "Không có thông tin"
  },
  {
    "title": "The Landmark 81 - Khu đô thị Vinhomes Central Park",
    "price": "4,9 - 22 tỷ",
    "address": "Đường Điện Biên Phủ, Phường 22, Quận Bình Thạnh, Thành phố Hồ Chí Minh",
    "area": "54-55-66m2\n78-87-90-94m2\n106-109-133-145m2\n144-171-172-173-186-192-249-258-269-407-420-431m2"
  },
  {
    "title": "The Vista An Phú",
    "price": "4,3 tỷ",
    "address": "628C Xa lộ Hà Nội, phường An Phú, quận 2, TP Thủ Đức, TP HCM",
    "area": "101m2 - 221 m2"
  },
  {
    "title": "101 Láng Hạ",
    "price": "2,3 - 4,6 tỷ",
    "address": "Số 101 Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Hà Nội",
    "area": "76;79;82;83;116;125"
  },
  {
    "title": "108 Nguyễn Trãi",
    "price": "11,2 tỷ",
    "address": "Số 108 Nguyễn Trãi, Phường Thượng Đình, Quận Thanh Xuân, Hà Nội",
    "area": "87;87,3;88,3;91;97,85;108"
  },
  {
    "title": "113 Trung Kính",
    "price": "3 - 3,5 tỷ",
    "address": "Số 113 Trung Kính, Phường Yên Hòa, Quận Cầu Giấy, Hà Nội",
    "area": "94;109;110;128;150"
  },
  {
    "title": "12 View",
    "price": "950 triệu - 1,6 tỷ",
    "address": "Đường Phan Văn Hớn, Phường Tân Thới Nhất, Quận 12, Thành phố Hồ Chí Minh",
    "area": "55;73;84;92"
  }
]
const dataWithIds = data.map((item, index) => ({ ...item, id: index + 1 }));

export default dataWithIds;

