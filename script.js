
// ==========================================================================
// TRANSLATION TOGGLE LOGIC & EXAM TRANSLATION MAP
// ==========================================================================
const PROMPT_TRANSLATIONS_MAP = {"Your foreign teacher is going to leave Vietnam. Your class wants to choose a gift for him. There are three options: a lotus picture, a Vietnamese coffee package, and a hand-made gift. Which one is the best choice?": "Giáo viên nước ngoài của bạn sắp rời Việt Nam. Lớp của bạn muốn chọn một món quà tặng thầy. Có 3 lựa chọn: <strong><em>bức tranh hoa sen</em></strong>, <strong><em>gói cà phê Việt Nam</em></strong>, và <strong><em>món quà làm thủ công (handmade)</em></strong>. Lựa chọn nào là tốt nhất?", "SITUATION 01: Your foreign teacher is going to leave Vietnam. Your class wants to choose a gift for him. There are three options: a lotus picture, a Vietnamese coffee package, and a hand-made gift. Which one is the best choice?": "Giáo viên nước ngoài của bạn sắp rời Việt Nam. Lớp của bạn muốn chọn một món quà tặng thầy. Có 3 lựa chọn: <strong><em>bức tranh hoa sen</em></strong>, <strong><em>gói cà phê Việt Nam</em></strong>, và <strong><em>món quà làm thủ công (handmade)</em></strong>. Lựa chọn nào là tốt nhất?", "Your class wants to choose a gift for your teacher. There are three choices: a handbag, shoes, and glasses. Which one would you choose?": "Lớp của bạn muốn chọn một món quà cho cô giáo nhân ngày Nhà giáo Việt Nam. Có 3 lựa chọn: <strong><em>túi xách</em></strong>, <strong><em>đôi giày</em></strong>, và <strong><em>chiếc kính mắt</em></strong>. Bạn sẽ chọn món quà nào?", "SITUATION 02: Your class wants to choose a gift for your teacher. There are three choices: a handbag, shoes, and glasses. Which one would you choose?": "Lớp của bạn muốn chọn một món quà cho cô giáo nhân ngày Nhà giáo Việt Nam. Có 3 lựa chọn: <strong><em>túi xách</em></strong>, <strong><em>đôi giày</em></strong>, và <strong><em>chiếc kính mắt</em></strong>. Bạn sẽ chọn món quà nào?", "Your friend’s birthday is coming up, and you want to buy him a special gift. You have three options to choose from: a watch, a pair of headphones, or a picture frame. Which one would you choose, and why?": "Sắp đến sinh nhật của bạn bạn, và bạn muốn mua tặng anh ấy một món quà đặc biệt. Bạn có 3 phương án để chọn: <strong><em>đồng hồ đeo tay</em></strong>, <strong><em>tai nghe</em></strong>, hoặc <strong><em>khung ảnh</em></strong>. Bạn sẽ chọn món quà nào và tại sao?", "SITUATION 03: Your friend’s birthday is coming up, and you want to buy him a special gift. You have three options to choose from: a watch, a pair of headphones, or a picture frame. Which one would you choose, and why?": "Sắp đến sinh nhật của bạn bạn, và bạn muốn mua tặng anh ấy một món quà đặc biệt. Bạn có 3 phương án để chọn: <strong><em>đồng hồ đeo tay</em></strong>, <strong><em>tai nghe</em></strong>, hoặc <strong><em>khung ảnh</em></strong>. Bạn sẽ chọn món quà nào và tại sao?", "You want to choose a gift for your colleague who is retiring next week. Three gifts are considered: a handmade gift, a movie ticket, or a book. Which one do you choose?": "Bạn muốn chọn một món quà cho đồng nghiệp sắp nghỉ hưu vào tuần tới. Có 3 món quà được cân nhắc: <strong><em>món quà làm thủ công (handmade)</em></strong>, <strong><em>vé xem phim</em></strong>, hoặc <strong><em>một cuốn sách</em></strong>. Bạn sẽ chọn món nào?", "SITUATION 04: You want to choose a gift for your colleague who is retiring next week. Three gifts are considered: a handmade gift, a movie ticket, or a book. Which one do you choose?": "Bạn muốn chọn một món quà cho đồng nghiệp sắp nghỉ hưu vào tuần tới. Có 3 món quà được cân nhắc: <strong><em>món quà làm thủ công (handmade)</em></strong>, <strong><em>vé xem phim</em></strong>, hoặc <strong><em>một cuốn sách</em></strong>. Bạn sẽ chọn món nào?", "Your friend is going to do military service. You are thinking about a gift for him. There are three options: a game, a book, and a diary. Which one would you choose?": "Bạn của bạn sắp đi thực hiện nghĩa vụ quân sự. Bạn đang nghĩ về một món quà tặng bạn ấy. Có 3 lựa chọn: <strong><em>một trò chơi</em></strong>, <strong><em>một cuốn sách</em></strong>, và <strong><em>một cuốn nhật ký</em></strong>. Bạn sẽ chọn món quà nào?", "SITUATION 05: Your friend is going to do military service. You are thinking about a gift for him. There are three options: a game, a book, and a diary. Which one would you choose?": "Bạn của bạn sắp đi thực hiện nghĩa vụ quân sự. Bạn đang nghĩ về một món quà tặng bạn ấy. Có 3 lựa chọn: <strong><em>một trò chơi</em></strong>, <strong><em>một cuốn sách</em></strong>, và <strong><em>một cuốn nhật ký</em></strong>. Bạn sẽ chọn món quà nào?", "Your nephew will visit your hometown. You are going to give him a gift. There are three options: a robot, an English comic book, or a school bag. Which one do you think is the best choice?": "Cháu trai của bạn sắp về thăm quê. Bạn dự định tặng cậu bé một món quà. Có 3 lựa chọn: <strong><em>một con rô-bốt</em></strong>, <strong><em>một cuốn truyện tranh tiếng Anh</em></strong>, hoặc <strong><em>một chiếc cặp đi học</em></strong>. Bạn nghĩ món nào là tốt nhất?", "SITUATION 06: Your nephew will visit your hometown. You are going to give him a gift. There are three options: a robot, an English comic book, or a school bag. Which one do you think is the best choice?": "Cháu trai của bạn sắp về thăm quê. Bạn dự định tặng cậu bé một món quà. Có 3 lựa chọn: <strong><em>một con rô-bốt</em></strong>, <strong><em>một cuốn truyện tranh tiếng Anh</em></strong>, hoặc <strong><em>một chiếc cặp đi học</em></strong>. Bạn nghĩ món nào là tốt nhất?", "Your friend had an accident and he has to stay in the hospital for a week. You are thinking about a gift for him. There are three options: flowers, a set of crayons and a drawing book, or some healthy snacks. Which one will you choose?": "Bạn của bạn gặp tai nạn và phải nằm viện một tuần. Bạn đang nghĩ về một món quà cho bạn ấy. Có 3 lựa chọn: <strong><em>hoa tươi</em></strong>, <strong><em>bộ bút màu kèm tập vẽ tranh</em></strong>, hoặc <strong><em>một ít đồ ăn nhẹ tốt cho sức khỏe</em></strong>. Bạn sẽ chọn món quà nào?", "SITUATION 07: Your friend had an accident and he has to stay in the hospital for a week. You are thinking about a gift for him. There are three options: flowers, a set of crayons and a drawing book, or some healthy snacks. Which one will you choose?": "Bạn của bạn gặp tai nạn và phải nằm viện một tuần. Bạn đang nghĩ về một món quà cho bạn ấy. Có 3 lựa chọn: <strong><em>hoa tươi</em></strong>, <strong><em>bộ bút màu kèm tập vẽ tranh</em></strong>, hoặc <strong><em>một ít đồ ăn nhẹ tốt cho sức khỏe</em></strong>. Bạn sẽ chọn món quà nào?", "Your cousin has just ranked first in his class. His parents want to give him a special gift. They’re considering three options: buying him a laptop, giving him a trip, or buying him a motorbike. Which one would you suggest?": "Anh/em họ của bạn vừa đứng đầu lớp. Bố mẹ cậu ấy muốn tặng một món quà đặc biệt và đang cân nhắc 3 phương án: <strong><em>mua một chiếc máy tính xách tay (laptop)</em></strong>, <strong><em>thưởng một chuyến du lịch</em></strong>, hoặc <strong><em>mua một chiếc xe máy</em></strong>. Bạn sẽ gợi ý món nào?", "SITUATION 08: Your cousin has just ranked first in his class. His parents want to give him a special gift. They’re considering three options: buying him a laptop, giving him a trip, or buying him a motorbike. Which one would you suggest?": "Anh/em họ của bạn vừa đứng đầu lớp. Bố mẹ cậu ấy muốn tặng một món quà đặc biệt và đang cân nhắc 3 phương án: <strong><em>mua một chiếc máy tính xách tay (laptop)</em></strong>, <strong><em>thưởng một chuyến du lịch</em></strong>, hoặc <strong><em>mua một chiếc xe máy</em></strong>. Bạn sẽ gợi ý món nào?", "Your nephew has just turned 13, and you want to give him a special gift. You are considering three options: a guitar, an MP3 player, or a set of comic books. Which one would you choose?": "Cháu trai của bạn vừa tròn 13 tuổi, và bạn muốn tặng cậu bé một món quà đặc biệt. Bạn đang cân nhắc 3 lựa chọn: <strong><em>đàn ghi-ta</em></strong>, <strong><em>máy nghe nhạc MP3</em></strong>, hoặc <strong><em>bộ truyện tranh</em></strong>. Bạn sẽ chọn món nào?", "SITUATION 09: Your nephew has just turned 13, and you want to give him a special gift. You are considering three options: a guitar, an MP3 player, or a set of comic books. Which one would you choose?": "Cháu trai của bạn vừa tròn 13 tuổi, và bạn muốn tặng cậu bé một món quà đặc biệt. Bạn đang cân nhắc 3 lựa chọn: <strong><em>đàn ghi-ta</em></strong>, <strong><em>máy nghe nhạc MP3</em></strong>, hoặc <strong><em>bộ truyện tranh</em></strong>. Bạn sẽ chọn món nào?", "Your niece is turning twelve years old next week. You are thinking about what to give her. There are three options: a dress, an English book, and a bunch of flowers. Which one is the best choice?": "Cháu gái của bạn sẽ tròn 12 tuổi vào tuần tới. Bạn đang suy nghĩ nên tặng cô bé món quà gì. Có 3 lựa chọn: <strong><em>một chiếc váy đầm</em></strong>, <strong><em>một cuốn sách tiếng Anh</em></strong>, và <strong><em>một bó hoa tươi</em></strong>. Lựa chọn nào là tốt nhất?", "SITUATION 10: Your niece is turning twelve years old next week. You are thinking about what to give her. There are three options: a dress, an English book, and a bunch of flowers. Which one is the best choice?": "Cháu gái của bạn sẽ tròn 12 tuổi vào tuần tới. Bạn đang suy nghĩ nên tặng cô bé món quà gì. Có 3 lựa chọn: <strong><em>một chiếc váy đầm</em></strong>, <strong><em>một cuốn sách tiếng Anh</em></strong>, và <strong><em>một bó hoa tươi</em></strong>. Lựa chọn nào là tốt nhất?", "Your friend, who is a musician, is having his first song published next month. You want to buy him a gift to celebrate this special occasion. There are three choices: a bouquet of flowers, a handmade card, and a notebook.": "Một người bạn làm nhạc sĩ của bạn sắp phát hành bài hát đầu tay vào tháng tới. Bạn muốn mua tặng anh ấy một món quà chúc mừng dịp đặc biệt này. Có 3 phương án: <strong><em>bó hoa tươi</em></strong>, <strong><em>tấm thiệp tự làm</em></strong>, và <strong><em>cuốn sổ tay</em></strong>. Bạn sẽ chọn gì?", "SITUATION 11: Your friend, who is a musician, is having his first song published next month. You want to buy him a gift to celebrate this special occasion. There are three choices: a bouquet of flowers, a handmade card, and a notebook.": "Một người bạn làm nhạc sĩ của bạn sắp phát hành bài hát đầu tay vào tháng tới. Bạn muốn mua tặng anh ấy một món quà chúc mừng dịp đặc biệt này. Có 3 phương án: <strong><em>bó hoa tươi</em></strong>, <strong><em>tấm thiệp tự làm</em></strong>, và <strong><em>cuốn sổ tay</em></strong>. Bạn sẽ chọn gì?", "You are going to choose a birthday gift for your father. There are three choices: a tie, a bottle of champagne, and a puppy. Which one would you choose?": "Bạn dự định chọn một món quà sinh nhật cho bố. Có 3 lựa chọn: <strong><em>một chiếc cà vạt</em></strong>, <strong><em>một chai rượu sâm-panh</em></strong>, và <strong><em>một chú cún con</em></strong>. Bạn sẽ chọn món nào?", "SITUATION 12: You are going to choose a birthday gift for your father. There are three choices: a tie, a bottle of champagne, and a puppy. Which one would you choose?": "Bạn dự định chọn một món quà sinh nhật cho bố. Có 3 lựa chọn: <strong><em>một chiếc cà vạt</em></strong>, <strong><em>một chai rượu sâm-panh</em></strong>, và <strong><em>một chú cún con</em></strong>. Bạn sẽ chọn món nào?", "Vietnamese Teachers' Day is coming, and your class wants to give your teacher a special gift. You are considering three options: organizing a small party, making a thank-you video, and giving a handmade card. Which is the best choice?": "Ngày Nhà giáo Việt Nam sắp đến, và lớp của bạn muốn tặng cô giáo một món quà đặc biệt. Có 3 lựa chọn: <strong><em>tổ chức một bữa tiệc nhỏ</em></strong>, <strong><em>làm một video tri ân</em></strong>, và <strong><em>tặng tấm thiệp tự làm (handmade)</em></strong>. Lựa chọn nào là tốt nhất?", "SITUATION 13: Vietnamese Teachers' Day is coming, and your class wants to give your teacher a special gift. You are considering three options: organizing a small party, making a thank-you video, and giving a handmade card. Which is the best choice?": "Ngày Nhà giáo Việt Nam sắp đến, và lớp của bạn muốn tặng cô giáo một món quà đặc biệt. Có 3 lựa chọn: <strong><em>tổ chức một bữa tiệc nhỏ</em></strong>, <strong><em>làm một video tri ân</em></strong>, và <strong><em>tặng tấm thiệp tự làm (handmade)</em></strong>. Lựa chọn nào là tốt nhất?", "You are choosing a gift for your foreign friend to represent Vietnamese culture. You have three options: some lotus flowers, an Ao Dai, or a conical hat. Which one would you choose?": "Bạn đang chọn một món quà mang đậm văn hóa Việt Nam cho một người bạn nước ngoài. Có 3 lựa chọn: <strong><em>hoa sen tươi</em></strong>, <strong><em>chiếc áo dài</em></strong>, hoặc <strong><em>chiếc nón lá truyền thống</em></strong>. Bạn sẽ chọn món quà nào?", "SITUATION 14: You are choosing a gift for your foreign friend to represent Vietnamese culture. You have three options: some lotus flowers, an Ao Dai, or a conical hat. Which one would you choose?": "Bạn đang chọn một món quà mang đậm văn hóa Việt Nam cho một người bạn nước ngoài. Có 3 lựa chọn: <strong><em>hoa sen tươi</em></strong>, <strong><em>chiếc áo dài</em></strong>, hoặc <strong><em>chiếc nón lá truyền thống</em></strong>. Bạn sẽ chọn món quà nào?", "Your friend is thinking about a gift to celebrate his parents' 30th wedding anniversary. Three options are: a trip abroad, a couple’s watch, or a family photoshoot. Which one would you recommend him?": "Bạn của bạn đang suy nghĩ về món quà kỷ niệm 30 năm ngày cưới của bố mẹ. Ba phương án là: <strong><em>một chuyến du lịch nước ngoài</em></strong>, <strong><em>một cặp đồng hồ đôi</em></strong>, hoặc <strong><em>một buổi chụp ảnh gia đình</em></strong>. Bạn khuyên họ nên chọn món quà nào?", "SITUATION 15: Your friend is thinking about a gift to celebrate his parents' 30th wedding anniversary. Three options are: a trip abroad, a couple’s watch, or a family photoshoot. Which one would you recommend him?": "Bạn của bạn đang suy nghĩ về món quà kỷ niệm 30 năm ngày cưới của bố mẹ. Ba phương án là: <strong><em>một chuyến du lịch nước ngoài</em></strong>, <strong><em>một cặp đồng hồ đôi</em></strong>, hoặc <strong><em>một buổi chụp ảnh gia đình</em></strong>. Bạn khuyên họ nên chọn món quà nào?", "Your co-worker is going to retire next month. Your team wants to choose a meaningful gift for him. There are three options: a handwritten card, a picture of him with colleagues, and a meal at the best restaurant in your city. Which one do you think is the best choice, and why?": "Đồng nghiệp của bạn sẽ nghỉ hưu vào tháng tới. Nhóm của bạn muốn chọn một món quà ý nghĩa cho anh ấy. Có ba lựa chọn: <strong><em>một tấm thiệp viết tay</em></strong>, <strong><em>một bức ảnh chụp cùng các đồng nghiệp</em></strong>, hoặc <strong><em>một bữa ăn tại nhà hàng ngon nhất thành phố</em></strong>. Bạn nghĩ lựa chọn nào là tốt nhất, và tại sao?", "SITUATION 16: Your co-worker is going to retire next month. Your team wants to choose a meaningful gift for him. There are three options: a handwritten card, a picture of him with colleagues, and a meal at the best restaurant in your city. Which one do you think is the best choice, and why?": "Đồng nghiệp của bạn sẽ nghỉ hưu vào tháng tới. Nhóm của bạn muốn chọn một món quà ý nghĩa cho anh ấy. Có ba lựa chọn: <strong><em>một tấm thiệp viết tay</em></strong>, <strong><em>một bức ảnh chụp cùng các đồng nghiệp</em></strong>, hoặc <strong><em>một bữa ăn tại nhà hàng ngon nhất thành phố</em></strong>. Bạn nghĩ lựa chọn nào là tốt nhất, và tại sao?", "You are planning a weekend vacation. There are three options: going to the beach, visiting the mountains, and exploring a city with museums and cafés. Which one is the best choice for you?": "Bạn đang lên kế hoạch cho một kỳ nghỉ cuối tuần. Có 3 lựa chọn: <strong><em>đi biển</em></strong>, <strong><em>đi thăm vùng núi</em></strong>, và <strong><em>khám phá thành phố với các bảo tàng và quán cà phê</em></strong>. Lựa chọn nào là tốt nhất cho bạn?", "SITUATION 01: You are planning a weekend vacation. There are three options: going to the beach, visiting the mountains, and exploring a city with museums and cafés. Which one is the best choice for you?": "Bạn đang lên kế hoạch cho một kỳ nghỉ cuối tuần. Có 3 lựa chọn: <strong><em>đi biển</em></strong>, <strong><em>đi thăm vùng núi</em></strong>, và <strong><em>khám phá thành phố với các bảo tàng và quán cà phê</em></strong>. Lựa chọn nào là tốt nhất cho bạn?", "You have some free time in the evening and want to do something to relax. Three activities are considered: reading a book, watching TV, and going for a walk. Which one would you choose?": "Bạn có chút thời gian rảnh vào buổi tối và muốn làm điều gì đó để thư giãn. Ba hoạt động được cân nhắc: <strong><em>đọc một cuốn sách</em></strong>, <strong><em>xem ti-vi</em></strong>, và <strong><em>đi dạo bộ</em></strong>. Bạn sẽ chọn hoạt động nào?", "SITUATION 02: You have some free time in the evening and want to do something to relax. Three activities are considered: reading a book, watching TV, and going for a walk. Which one would you choose?": "Bạn có chút thời gian rảnh vào buổi tối và muốn làm điều gì đó để thư giãn. Ba hoạt động được cân nhắc: <strong><em>đọc một cuốn sách</em></strong>, <strong><em>xem ti-vi</em></strong>, và <strong><em>đi dạo bộ</em></strong>. Bạn sẽ chọn hoạt động nào?", "You are thinking about how to spend your weekend. There are three options: going out with your family, hanging out with friends, and relaxing alone at home. Which one is the best choice?": "Bạn đang suy nghĩ về cách trải qua ngày cuối tuần của mình. Có 3 lựa chọn: <strong><em>đi chơi với gia đình</em></strong>, <strong><em>tụ tập với bạn bè</em></strong>, và <strong><em>thư giãn một mình ở nhà</em></strong>. Đâu là lựa chọn tốt nhất?", "SITUATION 03: You are thinking about how to spend your weekend. There are three options: going out with your family, hanging out with friends, and relaxing alone at home. Which one is the best choice?": "Bạn đang suy nghĩ về cách trải qua ngày cuối tuần của mình. Có 3 lựa chọn: <strong><em>đi chơi với gia đình</em></strong>, <strong><em>tụ tập với bạn bè</em></strong>, và <strong><em>thư giãn một mình ở nhà</em></strong>. Đâu là lựa chọn tốt nhất?", "Your friend is coming to visit your house next week. You are thinking of a cosy dinner with your friend. Three options are: cooking at home, ordering food from a restaurant, and eating out at a restaurant. Which option would you choose?": "Bạn của bạn sẽ đến thăm nhà bạn vào tuần tới. Bạn đang nghĩ về một bữa tối ấm cúng cùng bạn của mình. Ba lựa chọn là: <strong><em>tự nấu ăn ở nhà</em></strong>, <strong><em>đặt đồ ăn từ nhà hàng</em></strong>, và <strong><em>đi ăn ngoài tại nhà hàng</em></strong>. Bạn sẽ chọn phương án nào?", "SITUATION 04: Your friend is coming to visit your house next week. You are thinking of a cosy dinner with your friend. Three options are: cooking at home, ordering food from a restaurant, and eating out at a restaurant. Which option would you choose?": "Bạn của bạn sẽ đến thăm nhà bạn vào tuần tới. Bạn đang nghĩ về một bữa tối ấm cúng cùng bạn của mình. Ba lựa chọn là: <strong><em>tự nấu ăn ở nhà</em></strong>, <strong><em>đặt đồ ăn từ nhà hàng</em></strong>, và <strong><em>đi ăn ngoài tại nhà hàng</em></strong>. Bạn sẽ chọn phương án nào?", "You are considering what to do during a 15-minute break. There are three options: reading a book, talking with friends, and doing exercise. Which one is the best choice for you?": "Bạn đang cân nhắc nên làm gì trong giờ nghỉ giải lao 15 phút. Có 3 phương án: <strong><em>đọc một cuốn sách</em></strong>, <strong><em>trò chuyện với bạn bè</em></strong>, và <strong><em>tập thể dục</em></strong>. Lựa chọn nào là tốt nhất cho bạn?", "SITUATION 05: You are considering what to do during a 15-minute break. There are three options: reading a book, talking with friends, and doing exercise. Which one is the best choice for you?": "Bạn đang cân nhắc nên làm gì trong giờ nghỉ giải lao 15 phút. Có 3 phương án: <strong><em>đọc một cuốn sách</em></strong>, <strong><em>trò chuyện với bạn bè</em></strong>, và <strong><em>tập thể dục</em></strong>. Lựa chọn nào là tốt nhất cho bạn?", "You have two days off and want to make the most of your time. Three activities are considered: staying at home, traveling abroad, and hiking with your friends. Which one would you choose?": "Bạn có 2 ngày nghỉ và muốn tận dụng tối đa thời gian của mình. Ba hoạt động được cân nhắc: <strong><em>ở nhà</em></strong>, <strong><em>đi du lịch nước ngoài</em></strong>, và <strong><em>đi bộ đường dài (hiking) cùng bạn bè</em></strong>. Bạn sẽ chọn phương án nào?", "SITUATION 06: You have two days off and want to make the most of your time. Three activities are considered: staying at home, traveling abroad, and hiking with your friends. Which one would you choose?": "Bạn có 2 ngày nghỉ và muốn tận dụng tối đa thời gian của mình. Ba hoạt động được cân nhắc: <strong><em>ở nhà</em></strong>, <strong><em>đi du lịch nước ngoài</em></strong>, và <strong><em>đi bộ đường dài (hiking) cùng bạn bè</em></strong>. Bạn sẽ chọn phương án nào?", "Your friend wants to learn a new skill after work, but she doesn't have much free time. She is considering three options: painting, gardening, and knitting. Which one would you recommend to her?": "Bạn của bạn muốn học một kỹ năng mới sau giờ làm, nhưng cô ấy không có nhiều thời gian rảnh. Cô ấy đang cân nhắc 3 lựa chọn: <strong><em>vẽ tranh</em></strong>, <strong><em>làm vườn</em></strong>, và <strong><em>đan len</em></strong>. Bạn sẽ khuyên cô ấy chọn môn nào?", "SITUATION 07: Your friend wants to learn a new skill after work, but she doesn't have much free time. She is considering three options: painting, gardening, and knitting. Which one would you recommend to her?": "Bạn của bạn muốn học một kỹ năng mới sau giờ làm, nhưng cô ấy không có nhiều thời gian rảnh. Cô ấy đang cân nhắc 3 lựa chọn: <strong><em>vẽ tranh</em></strong>, <strong><em>làm vườn</em></strong>, và <strong><em>đan len</em></strong>. Bạn sẽ khuyên cô ấy chọn môn nào?", "Your friend feels very stressed with study and wants to do something. Which one would you recommend to her: taking a sport, learning new soft skills, and doing volunteer work?": "Bạn của bạn cảm thấy rất căng thẳng với việc học và muốn làm điều gì đó. Bạn sẽ gợi ý cho cô ấy phương án nào: <strong><em>chơi một môn thể thao</em></strong>, <strong><em>học các kỹ năng mềm mới</em></strong>, hay <strong><em>tham gia hoạt động tình nguyện</em></strong>?", "SITUATION 08: Your friend feels very stressed with study and wants to do something. Which one would you recommend to her: taking a sport, learning new soft skills, and doing volunteer work?": "Bạn của bạn cảm thấy rất căng thẳng với việc học và muốn làm điều gì đó. Bạn sẽ gợi ý cho cô ấy phương án nào: <strong><em>chơi một môn thể thao</em></strong>, <strong><em>học các kỹ năng mềm mới</em></strong>, hay <strong><em>tham gia hoạt động tình nguyện</em></strong>?", "Your friend wants to do something new to relax. There are three options: making a cake, going to a painting workshop, or learning a new language. Which one do you think is the best choice?": "Bạn của bạn muốn làm một điều gì đó mới mẻ để thư giãn. Có 3 lựa chọn: <strong><em>làm bánh kem</em></strong>, <strong><em>tham gia buổi học vẽ (workshop)</em></strong>, hoặc <strong><em>học một ngôn ngữ mới</em></strong>. Bạn nghĩ đâu là lựa chọn tốt nhất?", "SITUATION 09: Your friend wants to do something new to relax. There are three options: making a cake, going to a painting workshop, or learning a new language. Which one do you think is the best choice?": "Bạn của bạn muốn làm một điều gì đó mới mẻ để thư giãn. Có 3 lựa chọn: <strong><em>làm bánh kem</em></strong>, <strong><em>tham gia buổi học vẽ (workshop)</em></strong>, hoặc <strong><em>học một ngôn ngữ mới</em></strong>. Bạn nghĩ đâu là lựa chọn tốt nhất?", "Your sister lost her confidence. You are thinking about a way she can gain confidence. There are three choices: joining a summer camp, doing volunteer work, and joining a speaking contest. Which one would you recommend?": "Em gái của bạn bị mất tự tin. Bạn đang suy nghĩ cách để em ấy lấy lại sự tự tin. Có 3 lựa chọn: <strong><em>tham gia trại hè</em></strong>, <strong><em>làm công việc tình nguyện</em></strong>, và <strong><em>tham gia một cuộc thi nói</em></strong>. Bạn sẽ gợi ý phương án nào?", "SITUATION 10: Your sister lost her confidence. You are thinking about a way she can gain confidence. There are three choices: joining a summer camp, doing volunteer work, and joining a speaking contest. Which one would you recommend?": "Em gái của bạn bị mất tự tin. Bạn đang suy nghĩ cách để em ấy lấy lại sự tự tin. Có 3 lựa chọn: <strong><em>tham gia trại hè</em></strong>, <strong><em>làm công việc tình nguyện</em></strong>, và <strong><em>tham gia một cuộc thi nói</em></strong>. Bạn sẽ gợi ý phương án nào?", "Your family is discussing where your 7th-grade nephew will spend his summer holiday: joining a camp, doing military training, or staying with his grandparents in the countryside. Which one is the best choice for him?": "Gia đình bạn đang thảo luận xem cháu trai học lớp 7 nên trải qua kỳ nghỉ hè ở đâu: <strong><em>tham gia trại hè</em></strong>, <strong><em>tham gia khóa học quân sự</em></strong>, hay <strong><em>về ở với ông bà ở vùng quê</em></strong>. Đâu là lựa chọn tốt nhất cho cậu bé?", "SITUATION 11: Your family is discussing where your 7th-grade nephew will spend his summer holiday: joining a camp, doing military training, or staying with his grandparents in the countryside. Which one is the best choice for him?": "Gia đình bạn đang thảo luận xem cháu trai học lớp 7 nên trải qua kỳ nghỉ hè ở đâu: <strong><em>tham gia trại hè</em></strong>, <strong><em>tham gia khóa học quân sự</em></strong>, hay <strong><em>về ở với ông bà ở vùng quê</em></strong>. Đâu là lựa chọn tốt nhất cho cậu bé?", "You are going to have three days off. You are planning to do something to relax. There are three options: going to the beach, going hiking, and going to a big city. Which one will you choose?": "Bạn sắp có 3 ngày nghỉ. Bạn đang lên kế hoạch làm điều gì đó để thư giãn. Có 3 lựa chọn: <strong><em>đi biển</em></strong>, <strong><em>đi leo núi/hiking</em></strong>, và <strong><em>đi đến một thành phố lớn</em></strong>. Bạn sẽ chọn phương án nào?", "SITUATION 12: You are going to have three days off. You are planning to do something to relax. There are three options: going to the beach, going hiking, and going to a big city. Which one will you choose?": "Bạn sắp có 3 ngày nghỉ. Bạn đang lên kế hoạch làm điều gì đó để thư giãn. Có 3 lựa chọn: <strong><em>đi biển</em></strong>, <strong><em>đi leo núi/hiking</em></strong>, và <strong><em>đi đến một thành phố lớn</em></strong>. Bạn sẽ chọn phương án nào?", "You want to celebrate your birthday in a special way this year. You are considering three options: having a small party at home, going on a short trip with close friends, or spending the day volunteering. Which one would you choose?": "Bạn muốn kỷ niệm sinh nhật của mình theo một cách đặc biệt trong năm nay. Bạn đang cân nhắc 3 lựa chọn: <strong><em>tổ chức bữa tiệc nhỏ ở nhà</em></strong>, <strong><em>đi một chuyến đi ngắn với bạn thân</em></strong>, hoặc <strong><em>dành cả ngày làm tình nguyện</em></strong>. Bạn sẽ chọn phương án nào?", "SITUATION 13: You want to celebrate your birthday in a special way this year. You are considering three options: having a small party at home, going on a short trip with close friends, or spending the day volunteering. Which one would you choose?": "Bạn muốn kỷ niệm sinh nhật của mình theo một cách đặc biệt trong năm nay. Bạn đang cân nhắc 3 lựa chọn: <strong><em>tổ chức bữa tiệc nhỏ ở nhà</em></strong>, <strong><em>đi một chuyến đi ngắn với bạn thân</em></strong>, hoặc <strong><em>dành cả ngày làm tình nguyện</em></strong>. Bạn sẽ chọn phương án nào?", "You and your friends are planning a short holiday in Vietnam. You are considering three options: visiting Can Tho to explore the floating markets, going to Vung Tau for a beach trip, or hiking in Da Lat. Which activity would you choose?": "Bạn và bạn bè đang lên kế hoạch cho một kỳ nghỉ ngắn ngày ở Việt Nam. Các bạn đang cân nhắc 3 lựa chọn: <strong><em>đến Cần Thơ để khám phá chợ nổi</em></strong>, <strong><em>đi Vũng Tàu tắm biển</em></strong>, hoặc <strong><em>đi bộ đường dài (hiking) ở Đà Lạt</em></strong>. Bạn sẽ chọn hoạt động nào?", "SITUATION 14: You and your friends are planning a short holiday in Vietnam. You are considering three options: visiting Can Tho to explore the floating markets, going to Vung Tau for a beach trip, or hiking in Da Lat. Which activity would you choose?": "Bạn và bạn bè đang lên kế hoạch cho một kỳ nghỉ ngắn ngày ở Việt Nam. Các bạn đang cân nhắc 3 lựa chọn: <strong><em>đến Cần Thơ để khám phá chợ nổi</em></strong>, <strong><em>đi Vũng Tàu tắm biển</em></strong>, hoặc <strong><em>đi bộ đường dài (hiking) ở Đà Lạt</em></strong>. Bạn sẽ chọn hoạt động nào?", "You want to invite your friend to go to the cinema with you. There are three types of films you can choose from: an action film, a romantic film, and a comedy film. Which one would you choose, and why?": "Bạn muốn rủ bạn mình đi xem phim cùng. Có ba thể loại phim để chọn: <strong><em>phim hành động</em></strong>, <strong><em>phim tình cảm lãng mạn</em></strong>, và <strong><em>phim hài</em></strong>. Bạn sẽ chọn thể loại nào và tại sao?", "SITUATION 15: You want to invite your friend to go to the cinema with you. There are three types of films you can choose from: an action film, a romantic film, and a comedy film. Which one would you choose, and why?": "Bạn muốn rủ bạn mình đi xem phim cùng. Có ba thể loại phim để chọn: <strong><em>phim hành động</em></strong>, <strong><em>phim tình cảm lãng mạn</em></strong>, và <strong><em>phim hài</em></strong>. Bạn sẽ chọn thể loại nào và tại sao?", "Your English friend is visiting Vietnam on his summer vacation. Three places are considered: a mountainous town, a coastal city, and an ancient town. Which one would you recommend?": "Một người bạn người Anh của bạn sắp đến thăm Việt Nam vào kỳ nghỉ hè. Ba địa điểm đang được cân nhắc: <strong><em>một thị trấn miền núi</em></strong>, <strong><em>một thành phố ven biển</em></strong>, và <strong><em>một thị trấn/phố cổ</em></strong>. Bạn sẽ khuyên bạn ấy chọn địa điểm nào?", "SITUATION 01: Your English friend is visiting Vietnam on his summer vacation. Three places are considered: a mountainous town, a coastal city, and an ancient town. Which one would you recommend?": "Một người bạn người Anh của bạn sắp đến thăm Việt Nam vào kỳ nghỉ hè. Ba địa điểm đang được cân nhắc: <strong><em>một thị trấn miền núi</em></strong>, <strong><em>một thành phố ven biển</em></strong>, và <strong><em>một thị trấn/phố cổ</em></strong>. Bạn sẽ khuyên bạn ấy chọn địa điểm nào?", "You are going to have a short trip with your family. You are considering three choices: a water park, a museum, and an eco-tourism site. Which one would you choose?": "Bạn sắp có một chuyến đi chơi ngắn ngày cùng gia đình. Bạn đang cân nhắc ba lựa chọn: <strong><em>công viên nước</em></strong>, <strong><em>viện bảo tàng</em></strong>, và <strong><em>khu du lịch sinh thái</em></strong>. Bạn sẽ chọn nơi nào?", "SITUATION 02: You are going to have a short trip with your family. You are considering three choices: a water park, a museum, and an eco-tourism site. Which one would you choose?": "Bạn sắp có một chuyến đi chơi ngắn ngày cùng gia đình. Bạn đang cân nhắc ba lựa chọn: <strong><em>công viên nước</em></strong>, <strong><em>viện bảo tàng</em></strong>, và <strong><em>khu du lịch sinh thái</em></strong>. Bạn sẽ chọn nơi nào?", "Your class is planning to hold a reunion party. Three places are suggested: a restaurant, a coffee shop, or your teacher’s house. Which one would you choose?": "Lớp của bạn đang lên kế hoạch tổ chức một buổi tiệc họp mặt lớp (reunion party). Ba địa điểm được gợi ý: <strong><em>một nhà hàng</em></strong>, <strong><em>một quán cà phê</em></strong>, hoặc <strong><em>nhà thầy/cô giáo</em></strong>. Bạn sẽ chọn địa điểm nào?", "SITUATION 03: Your class is planning to hold a reunion party. Three places are suggested: a restaurant, a coffee shop, or your teacher’s house. Which one would you choose?": "Lớp của bạn đang lên kế hoạch tổ chức một buổi tiệc họp mặt lớp (reunion party). Ba địa điểm được gợi ý: <strong><em>một nhà hàng</em></strong>, <strong><em>một quán cà phê</em></strong>, hoặc <strong><em>nhà thầy/cô giáo</em></strong>. Bạn sẽ chọn địa điểm nào?", "Your neighbor wants to spend more quality time with her 11-year-old son. She is considering three places to take him: a park, a science center, or the beach. Which place would you recommend?": "Người hàng xóm của bạn muốn dành nhiều thời gian ý nghĩa hơn bên cậu con trai 11 tuổi. Cô ấy đang cân nhắc ba địa điểm để đưa con đi: <strong><em>công viên</em></strong>, <strong><em>trung tâm khoa học</em></strong>, hoặc <strong><em>bãi biển</em></strong>. Bạn sẽ khuyên cô ấy chọn nơi nào?", "SITUATION 04: Your neighbor wants to spend more quality time with her 11-year-old son. She is considering three places to take him: a park, a science center, or the beach. Which place would you recommend?": "Người hàng xóm của bạn muốn dành nhiều thời gian ý nghĩa hơn bên cậu con trai 11 tuổi. Cô ấy đang cân nhắc ba địa điểm để đưa con đi: <strong><em>công viên</em></strong>, <strong><em>trung tâm khoa học</em></strong>, hoặc <strong><em>bãi biển</em></strong>. Bạn sẽ khuyên cô ấy chọn nơi nào?", "A foreign friend is going to visit Vietnam in August for 3 days. Three places are suggested: Hanoi, Ho Chi Minh City, or Hue. Which one would you recommend?": "Một người bạn nước ngoài sắp đến thăm Việt Nam vào tháng 8 trong 3 ngày. Ba địa điểm được gợi ý: <strong><em>Hà Nội</em></strong>, <strong><em>Thành phố Hồ Chí Minh</em></strong>, hoặc <strong><em>Huế</em></strong>. Bạn sẽ khuyên bạn ấy nên đến đâu?", "SITUATION 05: A foreign friend is going to visit Vietnam in August for 3 days. Three places are suggested: Hanoi, Ho Chi Minh City, or Hue. Which one would you recommend?": "Một người bạn nước ngoài sắp đến thăm Việt Nam vào tháng 8 trong 3 ngày. Ba địa điểm được gợi ý: <strong><em>Hà Nội</em></strong>, <strong><em>Thành phố Hồ Chí Minh</em></strong>, hoặc <strong><em>Huế</em></strong>. Bạn sẽ khuyên bạn ấy nên đến đâu?", "You are going to take an exam. You are thinking of a place to study for exams. There are three choices: in your bedroom, in the school library, and in the coffee shop. Which one would you choose?": "Bạn sắp bước vào một kỳ thi quan trọng. Bạn đang tìm một nơi thích hợp để ôn thi. Có ba lựa chọn: <strong><em>trong phòng ngủ của bạn</em></strong>, <strong><em>trong thư viện trường</em></strong>, và <strong><em>ở quán cà phê</em></strong>. Bạn sẽ chọn nơi nào?", "SITUATION 06: You are going to take an exam. You are thinking of a place to study for exams. There are three choices: in your bedroom, in the school library, and in the coffee shop. Which one would you choose?": "Bạn sắp bước vào một kỳ thi quan trọng. Bạn đang tìm một nơi thích hợp để ôn thi. Có ba lựa chọn: <strong><em>trong phòng ngủ của bạn</em></strong>, <strong><em>trong thư viện trường</em></strong>, và <strong><em>ở quán cà phê</em></strong>. Bạn sẽ chọn nơi nào?", "Your foreign friend has come to Vietnam. You are thinking of a place to suggest him to travel. Which option is the best choice: Đà Nẵng, Hồ Chí Minh, and Hà Nội?": "Một người bạn nước ngoài của bạn đã đến Việt Nam. Bạn đang suy nghĩ về một địa điểm để gợi ý bạn ấy đi du lịch. Lựa chọn nào là tốt nhất: <strong><em>Đà Nẵng</em></strong>, <strong><em>Thành phố Hồ Chí Minh</em></strong>, hay <strong><em>Hà Nội</em></strong>?", "SITUATION 07: Your foreign friend has come to Vietnam. You are thinking of a place to suggest him to travel. Which option is the best choice: Đà Nẵng, Hồ Chí Minh, and Hà Nội?": "Một người bạn nước ngoài của bạn đã đến Việt Nam. Bạn đang suy nghĩ về một địa điểm để gợi ý bạn ấy đi du lịch. Lựa chọn nào là tốt nhất: <strong><em>Đà Nẵng</em></strong>, <strong><em>Thành phố Hồ Chí Minh</em></strong>, hay <strong><em>Hà Nội</em></strong>?", "Your class wants to hold a farewell party to say goodbye to your English teacher. Your class is considering where to hold it: in the classroom, in the teacher’s house, and in a restaurant. Which one is the best choice?": "Lớp của bạn muốn tổ chức một buổi tiệc chia tay (farewell party) giáo viên tiếng Anh. Cả lớp đang cân nhắc địa điểm tổ chức: <strong><em>tại phòng học</em></strong>, <strong><em>tại nhà giáo viên</em></strong>, hay <strong><em>ở nhà hàng</em></strong>. Đâu là lựa chọn tốt nhất?", "SITUATION 08: Your class wants to hold a farewell party to say goodbye to your English teacher. Your class is considering where to hold it: in the classroom, in the teacher’s house, and in a restaurant. Which one is the best choice?": "Lớp của bạn muốn tổ chức một buổi tiệc chia tay (farewell party) giáo viên tiếng Anh. Cả lớp đang cân nhắc địa điểm tổ chức: <strong><em>tại phòng học</em></strong>, <strong><em>tại nhà giáo viên</em></strong>, hay <strong><em>ở nhà hàng</em></strong>. Đâu là lựa chọn tốt nhất?", "Your cousin is going to be a freshman at the university. He is thinking about where to live. There are three choices: living in a dormitory, living with his friends, or living with his relatives. Which one is the best choice for him?": "Em họ của bạn sắp trở thành sinh viên năm nhất đại học. Cậu ấy đang đắn đo về nơi ở. Có ba lựa chọn: <strong><em>sống ở ký túc xá</em></strong>, <strong><em>ở cùng bạn bè</em></strong>, hoặc <strong><em>ở cùng người thân/họ hàng</em></strong>. Lựa chọn nào là tốt nhất cho cậu ấy?", "SITUATION 09: Your cousin is going to be a freshman at the university. He is thinking about where to live. There are three choices: living in a dormitory, living with his friends, or living with his relatives. Which one is the best choice for him?": "Em họ của bạn sắp trở thành sinh viên năm nhất đại học. Cậu ấy đang đắn đo về nơi ở. Có ba lựa chọn: <strong><em>sống ở ký túc xá</em></strong>, <strong><em>ở cùng bạn bè</em></strong>, hoặc <strong><em>ở cùng người thân/họ hàng</em></strong>. Lựa chọn nào là tốt nhất cho cậu ấy?", "A student from Đà Nẵng plans to visit Hà Nội this weekend. Three places are suggested for sightseeing: Hồ Chí Minh Mausoleum, Hoàn Kiếm Lake, or Hà Nội Museum. Which place would you recommend?": "Một bạn sinh viên từ Đà Nẵng dự định đến thăm Hà Nội vào cuối tuần này. Ba địa điểm được gợi ý để tham quan: <strong><em>Lăng Chủ tịch Hồ Chí Minh</em></strong>, <strong><em>Hồ Hoàn Kiếm</em></strong>, hoặc <strong><em>Bảo tàng Hà Nội</em></strong>. Bạn sẽ khuyên bạn ấy đến nơi nào?", "SITUATION 10: A student from Đà Nẵng plans to visit Hà Nội this weekend. Three places are suggested for sightseeing: Hồ Chí Minh Mausoleum, Hoàn Kiếm Lake, or Hà Nội Museum. Which place would you recommend?": "Một bạn sinh viên từ Đà Nẵng dự định đến thăm Hà Nội vào cuối tuần này. Ba địa điểm được gợi ý để tham quan: <strong><em>Lăng Chủ tịch Hồ Chí Minh</em></strong>, <strong><em>Hồ Hoàn Kiếm</em></strong>, hoặc <strong><em>Bảo tàng Hà Nội</em></strong>. Bạn sẽ khuyên bạn ấy đến nơi nào?", "Your company is planning a two-day conference for employees. There are three suggested places: at a hotel, at a conference centre, at your company. Which option do you think is the best choice?": "Công ty của bạn đang lên kế hoạch tổ chức một hội nghị kéo dài hai ngày cho nhân viên. Có ba địa điểm được đề xuất: <strong><em>tại khách sạn</em></strong>, <strong><em>tại trung tâm hội nghị</em></strong>, hoặc <strong><em>tại công ty</em></strong>. Theo bạn phương án nào là tốt nhất?", "SITUATION 11: Your company is planning a two-day conference for employees. There are three suggested places: at a hotel, at a conference centre, at your company. Which option do you think is the best choice?": "Công ty của bạn đang lên kế hoạch tổ chức một hội nghị kéo dài hai ngày cho nhân viên. Có ba địa điểm được đề xuất: <strong><em>tại khách sạn</em></strong>, <strong><em>tại trung tâm hội nghị</em></strong>, hoặc <strong><em>tại công ty</em></strong>. Theo bạn phương án nào là tốt nhất?", "You and your friend are choosing a place to eat out together this weekend. There are three options: a Thai restaurant, a Japanese restaurant, and a Chinese restaurant. Which one would you choose?": "Bạn và bạn của bạn đang chọn một nơi để đi ăn ngoài cùng nhau vào cuối tuần này. Có ba lựa chọn: <strong><em>một nhà hàng Thái</em></strong>, <strong><em>một nhà hàng Nhật</em></strong>, và <strong><em>một nhà hàng Trung Hoa</em></strong>. Bạn sẽ chọn nơi nào?", "SITUATION 12: You and your friend are choosing a place to eat out together this weekend. There are three options: a Thai restaurant, a Japanese restaurant, and a Chinese restaurant. Which one would you choose?": "Bạn và bạn của bạn đang chọn một nơi để đi ăn ngoài cùng nhau vào cuối tuần này. Có ba lựa chọn: <strong><em>một nhà hàng Thái</em></strong>, <strong><em>một nhà hàng Nhật</em></strong>, và <strong><em>một nhà hàng Trung Hoa</em></strong>. Bạn sẽ chọn nơi nào?", "You and your colleagues want to relax after a long working day. There are three options: going to a quiet café, going to a shopping mall, or going to a public park. Which place would you choose?": "Bạn và đồng nghiệp muốn thư giãn sau một ngày làm việc dài mệt mỏi. Có ba lựa chọn: <strong><em>đến một quán cà phê yên tĩnh</em></strong>, <strong><em>đến trung tâm thương mại</em></strong>, hoặc <strong><em>ra công viên công cộng</em></strong>. Bạn sẽ chọn địa điểm nào?", "SITUATION 13: You and your colleagues want to relax after a long working day. There are three options: going to a quiet café, going to a shopping mall, or going to a public park. Which place would you choose?": "Bạn và đồng nghiệp muốn thư giãn sau một ngày làm việc dài mệt mỏi. Có ba lựa chọn: <strong><em>đến một quán cà phê yên tĩnh</em></strong>, <strong><em>đến trung tâm thương mại</em></strong>, hoặc <strong><em>ra công viên công cộng</em></strong>. Bạn sẽ chọn địa điểm nào?", "Your friend is planning to study abroad and is choosing between three countries. The options are: Singapore, Australia, and Japan. Which one would you recommend?": "Bạn của bạn đang có kế hoạch đi du học và đang phân vân giữa ba quốc gia: <strong><em>Singapore</em></strong>, <strong><em>Úc (Australia)</em></strong>, và <strong><em>Nhật Bản (Japan)</em></strong>. Bạn sẽ gợi ý bạn ấy chọn quốc gia nào?", "SITUATION 14: Your friend is planning to study abroad and is choosing between three countries. The options are: Singapore, Australia, and Japan. Which one would you recommend?": "Bạn của bạn đang có kế hoạch đi du học và đang phân vân giữa ba quốc gia: <strong><em>Singapore</em></strong>, <strong><em>Úc (Australia)</em></strong>, và <strong><em>Nhật Bản (Japan)</em></strong>. Bạn sẽ gợi ý bạn ấy chọn quốc gia nào?", "Your friend is looking for a place to study. There are three options: a quiet bedroom, a living room, and a library. Which one would you recommend, and why?": "Bạn của bạn đang tìm một nơi để học tập. Có ba lựa chọn: <strong><em>phòng ngủ yên tĩnh</em></strong>, <strong><em>phòng khách</em></strong>, và <strong><em>thư viện</em></strong>. Bạn khuyên bạn ấy nên chọn địa điểm nào và tại sao?", "SITUATION 15: Your friend is looking for a place to study. There are three options: a quiet bedroom, a living room, and a library. Which one would you recommend, and why?": "Bạn của bạn đang tìm một nơi để học tập. Có ba lựa chọn: <strong><em>phòng ngủ yên tĩnh</em></strong>, <strong><em>phòng khách</em></strong>, và <strong><em>thư viện</em></strong>. Bạn khuyên bạn ấy nên chọn địa điểm nào và tại sao?", "Your company is going to organize a camping trip for all employees. There are three possible locations: a riverbank, a theme park, and a camping site. Which place would you choose, and why?": "Công ty bạn định tổ chức chuyến cắm trại dã ngoại cho toàn thể nhân viên. Có ba địa điểm: <strong><em>bờ sông</em></strong>, <strong><em>công viên giải trí</em></strong>, và <strong><em>khu cắm trại chuyên dụng</em></strong>. Bạn sẽ chọn địa điểm nào và tại sao?", "SITUATION 16: Your company is going to organize a camping trip for all employees. There are three possible locations: a riverbank, a theme park, and a camping site. Which place would you choose, and why?": "Công ty bạn định tổ chức chuyến cắm trại dã ngoại cho toàn thể nhân viên. Có ba địa điểm: <strong><em>bờ sông</em></strong>, <strong><em>công viên giải trí</em></strong>, và <strong><em>khu cắm trại chuyên dụng</em></strong>. Bạn sẽ chọn địa điểm nào và tại sao?", "Your workplace is about 10 km from your house. You are considering which means of transport to choose: car, bus, and motorbike. Which one would you choose?": "Nơi làm việc của bạn cách nhà khoảng 10 km. Bạn đang cân nhắc nên chọn phương tiện nào để đi làm hằng ngày: <strong><em>ô tô</em></strong>, <strong><em>xe buýt</em></strong>, hay <strong><em>xe máy</em></strong>. Bạn sẽ chọn phương tiện nào?", "SITUATION 01: Your workplace is about 10 km from your house. You are considering which means of transport to choose: car, bus, and motorbike. Which one would you choose?": "Nơi làm việc của bạn cách nhà khoảng 10 km. Bạn đang cân nhắc nên chọn phương tiện nào để đi làm hằng ngày: <strong><em>ô tô</em></strong>, <strong><em>xe buýt</em></strong>, hay <strong><em>xe máy</em></strong>. Bạn sẽ chọn phương tiện nào?", "A group of students is going to travel from Ho Chi Minh City to Hue. Three means of transport are suggested: by train, by plane, or by coach. Which one will you suggest?": "Một nhóm sinh viên dự định đi du lịch từ TP. Hồ Chí Minh đến Huế. Ba phương tiện được gợi ý là: <strong><em>đi tàu hỏa</em></strong>, <strong><em>đi máy bay</em></strong>, hoặc <strong><em>đi xe khách</em></strong>. Bạn sẽ gợi ý phương tiện nào?", "SITUATION 02: A group of students is going to travel from Ho Chi Minh City to Hue. Three means of transport are suggested: by train, by plane, or by coach. Which one will you suggest?": "Một nhóm sinh viên dự định đi du lịch từ TP. Hồ Chí Minh đến Huế. Ba phương tiện được gợi ý là: <strong><em>đi tàu hỏa</em></strong>, <strong><em>đi máy bay</em></strong>, hoặc <strong><em>đi xe khách</em></strong>. Bạn sẽ gợi ý phương tiện nào?", "Your friend is planning a weekend trip to a nearby beach, about 150 km away. He is considering going by motorbike, by car, or by bus. Which one do you think is the best option?": "Bạn của bạn đang lên kế hoạch cho chuyến đi chơi cuối tuần đến một bãi biển gần đó, cách khoảng 150 km. Bạn ấy đang cân nhắc: <strong><em>đi bằng xe máy</em></strong>, <strong><em>đi bằng ô tô</em></strong>, hoặc <strong><em>đi bằng xe buýt / xe khách</em></strong>. Theo bạn phương án nào là tốt nhất?", "SITUATION 03: Your friend is planning a weekend trip to a nearby beach, about 150 km away. He is considering going by motorbike, by car, or by bus. Which one do you think is the best option?": "Bạn của bạn đang lên kế hoạch cho chuyến đi chơi cuối tuần đến một bãi biển gần đó, cách khoảng 150 km. Bạn ấy đang cân nhắc: <strong><em>đi bằng xe máy</em></strong>, <strong><em>đi bằng ô tô</em></strong>, hoặc <strong><em>đi bằng xe buýt / xe khách</em></strong>. Theo bạn phương án nào là tốt nhất?", "You and your classmates will attend a 3-day camping trip in a remote area. You need to choose among riding bicycles, hiring a coach, or using motorbikes. Which option would you recommend?": "Bạn và các bạn cùng lớp sẽ tham gia một chuyến cắm trại 3 ngày tại một vùng xa xôi hẻo lánh. Bạn cần lựa chọn giữa: <strong><em>đi xe đạp</em></strong>, <strong><em>thuê một chiếc xe khách</em></strong>, hay <strong><em>sử dụng xe máy</em></strong>. Bạn sẽ gợi ý phương án nào?", "SITUATION 04: You and your classmates will attend a 3-day camping trip in a remote area. You need to choose among riding bicycles, hiring a coach, or using motorbikes. Which option would you recommend?": "Bạn và các bạn cùng lớp sẽ tham gia một chuyến cắm trại 3 ngày tại một vùng xa xôi hẻo lánh. Bạn cần lựa chọn giữa: <strong><em>đi xe đạp</em></strong>, <strong><em>thuê một chiếc xe khách</em></strong>, hay <strong><em>sử dụng xe máy</em></strong>. Bạn sẽ gợi ý phương án nào?", "A tourist wants to explore the city center of Hanoi. The three suggested modes of transport are walking, renting a bicycle, or taking a taxi. Which do you think is the most suitable?": "Một khách du lịch muốn khám phá khu vực trung tâm thành phố Hà Nội. Ba phương thức di chuyển được gợi ý là: <strong><em>đi bộ</em></strong>, <strong><em>thuê xe đạp</em></strong>, hoặc <strong><em>đi taxi</em></strong>. Theo bạn phương thức nào là phù hợp nhất?", "SITUATION 05: A tourist wants to explore the city center of Hanoi. The three suggested modes of transport are walking, renting a bicycle, or taking a taxi. Which do you think is the most suitable?": "Một khách du lịch muốn khám phá khu vực trung tâm thành phố Hà Nội. Ba phương thức di chuyển được gợi ý là: <strong><em>đi bộ</em></strong>, <strong><em>thuê xe đạp</em></strong>, hoặc <strong><em>đi taxi</em></strong>. Theo bạn phương thức nào là phù hợp nhất?", "Your company is organizing a team-building event in a city 400 km away. You need to decide between traveling by plane, by overnight train, or by company car. Which one would you choose and why?": "Công ty của bạn đang tổ chức một sự kiện gắn kết (team-building) tại một thành phố cách xa 400 km. Bạn cần quyết định giữa việc: <strong><em>đi máy bay</em></strong>, <strong><em>đi tàu hỏa qua đêm</em></strong>, hay <strong><em>đi xe ô tô của công ty</em></strong>. Bạn sẽ chọn phương án nào và tại sao?", "SITUATION 06: Your company is organizing a team-building event in a city 400 km away. You need to decide between traveling by plane, by overnight train, or by company car. Which one would you choose and why?": "Công ty của bạn đang tổ chức một sự kiện gắn kết (team-building) tại một thành phố cách xa 400 km. Bạn cần quyết định giữa việc: <strong><em>đi máy bay</em></strong>, <strong><em>đi tàu hỏa qua đêm</em></strong>, hay <strong><em>đi xe ô tô của công ty</em></strong>. Bạn sẽ chọn phương án nào và tại sao?", "Your friend is looking for a new job. He is considering three options: a graphic designer, an IT support specialist, or a content creator for social media. Which job would you recommend he choose?": "Bạn của bạn đang tìm kiếm một công việc mới. Bạn ấy đang cân nhắc ba lựa chọn: <strong><em>nhà thiết kế đồ họa</em></strong>, <strong><em>chuyên viên hỗ trợ IT</em></strong>, hoặc <strong><em>người sáng tạo nội dung mạng xã hội</em></strong>. Bạn sẽ khuyên bạn ấy chọn công việc nào?", "SITUATION 01: Your friend is looking for a new job. He is considering three options: a graphic designer, an IT support specialist, or a content creator for social media. Which job would you recommend he choose?": "Bạn của bạn đang tìm kiếm một công việc mới. Bạn ấy đang cân nhắc ba lựa chọn: <strong><em>nhà thiết kế đồ họa</em></strong>, <strong><em>chuyên viên hỗ trợ IT</em></strong>, hoặc <strong><em>người sáng tạo nội dung mạng xã hội</em></strong>. Bạn sẽ khuyên bạn ấy chọn công việc nào?", "Your brother is going to graduate from university. He is thinking about finding a job. There are three choices: a teacher, a translator, and a tour guide. Which one would you recommend?": "Anh trai của bạn sắp tốt nghiệp đại học và đang suy nghĩ về việc tìm việc làm. Có ba lựa chọn: <strong><em>giáo viên</em></strong>, <strong><em>biên dịch viên</em></strong>, và <strong><em>hướng dẫn viên du lịch</em></strong>. Bạn sẽ gợi ý công việc nào?", "SITUATION 02: Your brother is going to graduate from university. He is thinking about finding a job. There are three choices: a teacher, a translator, and a tour guide. Which one would you recommend?": "Anh trai của bạn sắp tốt nghiệp đại học và đang suy nghĩ về việc tìm việc làm. Có ba lựa chọn: <strong><em>giáo viên</em></strong>, <strong><em>biên dịch viên</em></strong>, và <strong><em>hướng dẫn viên du lịch</em></strong>. Bạn sẽ gợi ý công việc nào?", "Your friend wants to find a part-time job to improve his English. He is considering three options: a job at a restaurant, a job at an English center, and a job at a travel agency. Which one do you think is the best choice?": "Bạn của bạn muốn tìm một công việc làm thêm để nâng cao kỹ năng tiếng Anh. Bạn ấy đang cân nhắc ba lựa chọn: <strong><em>làm việc tại nhà hàng</em></strong>, <strong><em>làm việc tại trung tâm tiếng Anh</em></strong>, và <strong><em>làm việc tại công ty du lịch</em></strong>. Bạn nghĩ lựa chọn nào là tốt nhất?", "SITUATION 03: Your friend wants to find a part-time job to improve his English. He is considering three options: a job at a restaurant, a job at an English center, and a job at a travel agency. Which one do you think is the best choice?": "Bạn của bạn muốn tìm một công việc làm thêm để nâng cao kỹ năng tiếng Anh. Bạn ấy đang cân nhắc ba lựa chọn: <strong><em>làm việc tại nhà hàng</em></strong>, <strong><em>làm việc tại trung tâm tiếng Anh</em></strong>, và <strong><em>làm việc tại công ty du lịch</em></strong>. Bạn nghĩ lựa chọn nào là tốt nhất?", "Your friend has just graduated and is looking for a teaching job. There are three options: teaching in a rural school, teaching in a big city school, or teaching in an international school. Which one is most suitable for him?": "Bạn của bạn vừa tốt nghiệp và đang tìm một công việc giảng dạy. Có ba lựa chọn: <strong><em>dạy học tại một trường nông thôn</em></strong>, <strong><em>dạy tại trường ở thành phố lớn</em></strong>, hoặc <strong><em>dạy ở một trường quốc tế</em></strong>. Nơi nào phù hợp nhất với bạn ấy?", "SITUATION 04: Your friend has just graduated and is looking for a teaching job. There are three options: teaching in a rural school, teaching in a big city school, or teaching in an international school. Which one is most suitable for him?": "Bạn của bạn vừa tốt nghiệp và đang tìm một công việc giảng dạy. Có ba lựa chọn: <strong><em>dạy học tại một trường nông thôn</em></strong>, <strong><em>dạy tại trường ở thành phố lớn</em></strong>, hoặc <strong><em>dạy ở một trường quốc tế</em></strong>. Nơi nào phù hợp nhất với bạn ấy?", "Your cousin is passionate about art and creativity. She is thinking of pursuing a career. Three options are considered: a graphic designer, an interior decorator, and a fashion designer. Which one would you recommend?": "Em họ của bạn rất đam mê nghệ thuật và sáng tạo. Em ấy đang nghĩ đến việc theo đuổi sự nghiệp. Ba lựa chọn được cân nhắc: <strong><em>nhà thiết kế đồ họa</em></strong>, <strong><em>chuyên viên trang trí nội thất</em></strong>, và <strong><em>nhà thiết kế thời trang</em></strong>. Bạn sẽ khuyên em chọn nghề nào?", "SITUATION 05: Your cousin is passionate about art and creativity. She is thinking of pursuing a career. Three options are considered: a graphic designer, an interior decorator, and a fashion designer. Which one would you recommend?": "Em họ của bạn rất đam mê nghệ thuật và sáng tạo. Em ấy đang nghĩ đến việc theo đuổi sự nghiệp. Ba lựa chọn được cân nhắc: <strong><em>nhà thiết kế đồ họa</em></strong>, <strong><em>chuyên viên trang trí nội thất</em></strong>, và <strong><em>nhà thiết kế thời trang</em></strong>. Bạn sẽ khuyên em chọn nghề nào?", "Your close friend wants to choose a job that offers a good work-life balance. He is considering working in an office, becoming a freelancer, or running a small business. Which option do you think is the most suitable?": "Bạn thân của bạn muốn chọn một công việc mang lại sự cân bằng tốt giữa công việc và cuộc sống. Bạn ấy đang cân nhắc: <strong><em>làm việc văn phòng</em></strong>, <strong><em>làm nghề tự do (freelancer)</em></strong>, hoặc <strong><em>tự kinh doanh nhỏ</em></strong>. Bạn nghĩ lựa chọn nào là phù hợp nhất?", "SITUATION 06: Your close friend wants to choose a job that offers a good work-life balance. He is considering working in an office, becoming a freelancer, or running a small business. Which option do you think is the most suitable?": "Bạn thân của bạn muốn chọn một công việc mang lại sự cân bằng tốt giữa công việc và cuộc sống. Bạn ấy đang cân nhắc: <strong><em>làm việc văn phòng</em></strong>, <strong><em>làm nghề tự do (freelancer)</em></strong>, hoặc <strong><em>tự kinh doanh nhỏ</em></strong>. Bạn nghĩ lựa chọn nào là phù hợp nhất?", "Your younger sister wants a stable and well-paid job after graduation. She is considering three options: working for the government, working for a foreign company, or starting her own business. Which one would you suggest?": "Em gái của bạn muốn một công việc ổn định và lương cao sau khi tốt nghiệp. Em ấy đang cân nhắc ba lựa chọn: <strong><em>làm việc cho cơ quan nhà nước</em></strong>, <strong><em>làm việc cho công ty nước ngoài</em></strong>, hoặc <strong><em>tự khởi nghiệp kinh doanh</em></strong>. Bạn sẽ gợi ý phương án nào?", "SITUATION 07: Your younger sister wants a stable and well-paid job after graduation. She is considering three options: working for the government, working for a foreign company, or starting her own business. Which one would you suggest?": "Em gái của bạn muốn một công việc ổn định và lương cao sau khi tốt nghiệp. Em ấy đang cân nhắc ba lựa chọn: <strong><em>làm việc cho cơ quan nhà nước</em></strong>, <strong><em>làm việc cho công ty nước ngoài</em></strong>, hoặc <strong><em>tự khởi nghiệp kinh doanh</em></strong>. Bạn sẽ gợi ý phương án nào?", "Your brother has just graduated, and he is considering what to do after graduation. There are three options: go to work, study for his master’s degree, or take a gap year. Which one would you recommend him?": "Anh/em trai của bạn vừa tốt nghiệp và đang cân nhắc nên làm gì sau khi ra trường. Có 3 lựa chọn: <strong><em>đi làm ngay</em></strong>, <strong><em>học thạc sĩ</em></strong>, hoặc <strong><em>nghỉ một năm (gap year)</em></strong>. Bạn sẽ khuyên anh ấy chọn phương án nào?", "SITUATION 08: Your brother has just graduated, and he is considering what to do after graduation. There are three options: go to work, study for his master’s degree, or take a gap year. Which one would you recommend him?": "Anh/em trai của bạn vừa tốt nghiệp và đang cân nhắc nên làm gì sau khi ra trường. Có 3 lựa chọn: <strong><em>đi làm ngay</em></strong>, <strong><em>học thạc sĩ</em></strong>, hoặc <strong><em>nghỉ một năm (gap year)</em></strong>. Bạn sẽ khuyên anh ấy chọn phương án nào?", "Your younger sister has just finished high school and is planning to study at a university. She wants to choose a university that provides high-quality education. There are three factors she should consider: the university’s ranking, the distance from her home, and the tuition fees. Which one do you think is the best choice for her?": "Em gái của bạn vừa tốt nghiệp cấp 3 và dự định học đại học. Em ấy muốn chọn một trường đại học đảm bảo chất lượng giáo dục cao. Có 3 yếu tố em nên cân nhắc: <strong><em>thứ hạng của trường đại học</em></strong>, <strong><em>khoảng cách từ trường về nhà</em></strong>, và <strong><em>học phí</em></strong>. Bạn nghĩ yếu tố nào là lựa chọn tốt nhất cho em?", "SITUATION 01: Your younger sister has just finished high school and is planning to study at a university. She wants to choose a university that provides high-quality education. There are three factors she should consider: the university’s ranking, the distance from her home, and the tuition fees. Which one do you think is the best choice for her?": "Em gái của bạn vừa tốt nghiệp cấp 3 và dự định học đại học. Em ấy muốn chọn một trường đại học đảm bảo chất lượng giáo dục cao. Có 3 yếu tố em nên cân nhắc: <strong><em>thứ hạng của trường đại học</em></strong>, <strong><em>khoảng cách từ trường về nhà</em></strong>, và <strong><em>học phí</em></strong>. Bạn nghĩ yếu tố nào là lựa chọn tốt nhất cho em?", "Your cousin has just graduated from high school and is going to enter university. He is considering several factors before choosing a school. Three important things to think about are: affordable fees, student support, and campus facilities. Which one do you think is the best choice for him?": "Em họ của bạn vừa tốt nghiệp trung học phổ thông và chuẩn bị bước vào cánh cổng đại học. Em ấy đang cân nhắc một số tiêu chí trước khi chọn trường. Ba tiêu chí quan trọng gồm: <strong><em>mức học phí phải chăng</em></strong>, <strong><em>dịch vụ hỗ trợ sinh viên</em></strong>, và <strong><em>cơ sở vật chất khuôn viên trường</em></strong>. Bạn nghĩ tiêu chí nào là tốt nhất cho em ấy?", "SITUATION 02: Your cousin has just graduated from high school and is going to enter university. He is considering several factors before choosing a school. Three important things to think about are: affordable fees, student support, and campus facilities. Which one do you think is the best choice for him?": "Em họ của bạn vừa tốt nghiệp trung học phổ thông và chuẩn bị bước vào cánh cổng đại học. Em ấy đang cân nhắc một số tiêu chí trước khi chọn trường. Ba tiêu chí quan trọng gồm: <strong><em>mức học phí phải chăng</em></strong>, <strong><em>dịch vụ hỗ trợ sinh viên</em></strong>, và <strong><em>cơ sở vật chất khuôn viên trường</em></strong>. Bạn nghĩ tiêu chí nào là tốt nhất cho em ấy?", "As an employer, you want to hire a new employee for your company. There are three qualities you should consider: communication skills, honesty, and professional skills. Which one is the most important quality for you?": "Với tư cách là một nhà tuyển dụng, bạn muốn tuyển một nhân viên mới cho công ty của mình. Có 3 phẩm chất bạn cần cân nhắc: <strong><em>kỹ năng giao tiếp</em></strong>, <strong><em>tính trung thực</em></strong>, và <strong><em>kỹ năng chuyên môn</em></strong>. Phẩm chất nào là quan trọng nhất đối với bạn?", "SITUATION 03: As an employer, you want to hire a new employee for your company. There are three qualities you should consider: communication skills, honesty, and professional skills. Which one is the most important quality for you?": "Với tư cách là một nhà tuyển dụng, bạn muốn tuyển một nhân viên mới cho công ty của mình. Có 3 phẩm chất bạn cần cân nhắc: <strong><em>kỹ năng giao tiếp</em></strong>, <strong><em>tính trung thực</em></strong>, và <strong><em>kỹ năng chuyên môn</em></strong>. Phẩm chất nào là quan trọng nhất đối với bạn?", "Your brother is starting university next month, and your family is trying to decide which university would be the best fit for him. Three key factors are considered: the university’s ranking, its distance from home, and the course fees. In your opinion, which factor is the most important?": "Anh trai của bạn chuẩn bị nhập học đại học vào tháng tới, và gia đình bạn đang cùng nhau cân nhắc xem ngôi trường nào phù hợp nhất. Có 3 yếu tố chính: <strong><em>thứ hạng của trường đại học</em></strong>, <strong><em>khoảng cách từ nhà đến trường</em></strong>, và <strong><em>học phí của khóa học</em></strong>. Theo bạn, yếu tố nào quan trọng nhất?", "SITUATION 04: Your brother is starting university next month, and your family is trying to decide which university would be the best fit for him. Three key factors are considered: the university’s ranking, its distance from home, and the course fees. In your opinion, which factor is the most important?": "Anh trai của bạn chuẩn bị nhập học đại học vào tháng tới, và gia đình bạn đang cùng nhau cân nhắc xem ngôi trường nào phù hợp nhất. Có 3 yếu tố chính: <strong><em>thứ hạng của trường đại học</em></strong>, <strong><em>khoảng cách từ nhà đến trường</em></strong>, và <strong><em>học phí của khóa học</em></strong>. Theo bạn, yếu tố nào quan trọng nhất?", "Your nephew has just graduated from high school and is going to enter university. He is considering several factors before choosing a school. Three important things to think about are: tuition fees and living costs, facilities such as libraries and labs, or having supportive friends or classmates. Which one is the best choice?": "Cháu trai của bạn vừa tốt nghiệp cấp ba và chuẩn bị vào đại học. Bạn ấy đang cân nhắc một số yếu tố trước khi chọn trường: <strong><em>học phí và chi phí sinh hoạt</em></strong>, <strong><em>cơ sở vật chất như thư viện và phòng thí nghiệm</em></strong>, hoặc <strong><em>có bạn bè hỗ trợ nhau</em></strong>. Yếu tố nào là lựa chọn tốt nhất?", "SITUATION 05: Your nephew has just graduated from high school and is going to enter university. He is considering several factors before choosing a school. Three important things to think about are: tuition fees and living costs, facilities such as libraries and labs, or having supportive friends or classmates. Which one is the best choice?": "Cháu trai của bạn vừa tốt nghiệp cấp ba và chuẩn bị vào đại học. Bạn ấy đang cân nhắc một số yếu tố trước khi chọn trường: <strong><em>học phí và chi phí sinh hoạt</em></strong>, <strong><em>cơ sở vật chất như thư viện và phòng thí nghiệm</em></strong>, hoặc <strong><em>có bạn bè hỗ trợ nhau</em></strong>. Yếu tố nào là lựa chọn tốt nhất?", "Your family wants to buy a new house. There are three factors to consider: its size, its cost, and its location. Which one do you think is the best choice?": "Gia đình bạn muốn mua một ngôi nhà mới. Có 3 yếu tố cần cân nhắc: <strong><em>kích thước diện tích căn nhà</em></strong>, <strong><em>giá tiền chi phí</em></strong>, và <strong><em>vị trí tọa lạc</em></strong>. Bạn nghĩ yếu tố nào là quan trọng nhất?", "SITUATION 06: Your family wants to buy a new house. There are three factors to consider: its size, its cost, and its location. Which one do you think is the best choice?": "Gia đình bạn muốn mua một ngôi nhà mới. Có 3 yếu tố cần cân nhắc: <strong><em>kích thước diện tích căn nhà</em></strong>, <strong><em>giá tiền chi phí</em></strong>, và <strong><em>vị trí tọa lạc</em></strong>. Bạn nghĩ yếu tố nào là quan trọng nhất?", "You are going to graduate from university next month. You are thinking of finding a suitable job for yourself. Three things are considered: salary, location, and job promotion. Which one would you consider when choosing a job?": "Bạn chuẩn bị tốt nghiệp đại học vào tháng tới và đang nghĩ đến việc tìm một công việc phù hợp: <strong><em>mức lương thưởng</em></strong>, <strong><em>vị trí địa lý nơi làm việc</em></strong>, và <strong><em>cơ hội thăng tiến sự nghiệp</em></strong>. Bạn sẽ ưu tiên cân nhắc tiêu chí nào nhất?", "SITUATION 07: You are going to graduate from university next month. You are thinking of finding a suitable job for yourself. Three things are considered: salary, location, and job promotion. Which one would you consider when choosing a job?": "Bạn chuẩn bị tốt nghiệp đại học vào tháng tới và đang nghĩ đến việc tìm một công việc phù hợp: <strong><em>mức lương thưởng</em></strong>, <strong><em>vị trí địa lý nơi làm việc</em></strong>, và <strong><em>cơ hội thăng tiến sự nghiệp</em></strong>. Bạn sẽ ưu tiên cân nhắc tiêu chí nào nhất?", "You are planning to change your job. There are three important factors to consider when making your decision: better career prospects, a higher salary, and a more flexible job. Which one would you choose?": "Bạn đang dự định thay đổi công việc mới. Có 3 yếu tố quan trọng cần xem xét: <strong><em>triển vọng nghề nghiệp tốt hơn</em></strong>, <strong><em>mức lương cao hơn</em></strong>, và <strong><em>công việc linh hoạt hơn</em></strong>. Bạn sẽ ưu tiên lựa chọn tiêu chí nào?", "SITUATION 08: You are planning to change your job. There are three important factors to consider when making your decision: better career prospects, a higher salary, and a more flexible job. Which one would you choose?": "Bạn đang dự định thay đổi công việc mới. Có 3 yếu tố quan trọng cần xem xét: <strong><em>triển vọng nghề nghiệp tốt hơn</em></strong>, <strong><em>mức lương cao hơn</em></strong>, và <strong><em>công việc linh hoạt hơn</em></strong>. Bạn sẽ ưu tiên lựa chọn tiêu chí nào?", "Your school wants to improve the quality of education. There are three areas it can focus on: teachers, students, or facilities. Which one do you think is the most important?": "Trường học của bạn muốn nâng cao chất lượng giáo dục. Có 3 khía cạnh trọng tâm có thể tập trung đầu tư: <strong><em>đội ngũ giáo viên</em></strong>, <strong><em>học sinh</em></strong>, hoặc <strong><em>cơ sở vật chất</em></strong>. Bạn nghĩ khía cạnh nào là quan trọng nhất?", "SITUATION 09: Your school wants to improve the quality of education. There are three areas it can focus on: teachers, students, or facilities. Which one do you think is the most important?": "Trường học của bạn muốn nâng cao chất lượng giáo dục. Có 3 khía cạnh trọng tâm có thể tập trung đầu tư: <strong><em>đội ngũ giáo viên</em></strong>, <strong><em>học sinh</em></strong>, hoặc <strong><em>cơ sở vật chất</em></strong>. Bạn nghĩ khía cạnh nào là quan trọng nhất?", "As a company manager seeking to recruit new employees, you must evaluate three factors: honesty, communication skills, and professional skills. In your opinion, which factor is the most important?": "Với tư cách là người quản lý công ty đang tìm kiếm tuyển dụng nhân viên mới, bạn phải đánh giá 3 tiêu chí: <strong><em>tính trung thực</em></strong>, <strong><em>kỹ năng giao tiếp</em></strong>, và <strong><em>kỹ năng chuyên môn</em></strong>. Theo quan điểm của bạn, tiêu chí nào là quan trọng nhất?", "SITUATION 10: As a company manager seeking to recruit new employees, you must evaluate three factors: honesty, communication skills, and professional skills. In your opinion, which factor is the most important?": "Với tư cách là người quản lý công ty đang tìm kiếm tuyển dụng nhân viên mới, bạn phải đánh giá 3 tiêu chí: <strong><em>tính trung thực</em></strong>, <strong><em>kỹ năng giao tiếp</em></strong>, và <strong><em>kỹ năng chuyên môn</em></strong>. Theo quan điểm của bạn, tiêu chí nào là quan trọng nhất?", "Your 15-year-old younger brother wants to improve his English communication skills. There are three ways to choose: studying at an English center, talking with foreigners to practice speaking, and joining an English-speaking club. Which one is the best choice?": "Em trai 15 tuổi của bạn muốn cải thiện kỹ năng giao tiếp tiếng Anh. Có 3 cách để chọn: <strong><em>học tại trung tâm tiếng Anh</em></strong>, <strong><em>nói chuyện với người nước ngoài để luyện nói</em></strong>, và <strong><em>tham gia câu lạc bộ tiếng Anh</em></strong>. Lựa chọn nào là tốt nhất?", "SITUATION 01: Your 15-year-old younger brother wants to improve his English communication skills. There are three ways to choose: studying at an English center, talking with foreigners to practice speaking, and joining an English-speaking club. Which one is the best choice?": "Em trai 15 tuổi của bạn muốn cải thiện kỹ năng giao tiếp tiếng Anh. Có 3 cách để chọn: <strong><em>học tại trung tâm tiếng Anh</em></strong>, <strong><em>nói chuyện với người nước ngoài để luyện nói</em></strong>, và <strong><em>tham gia câu lạc bộ tiếng Anh</em></strong>. Lựa chọn nào là tốt nhất?", "Your friend spends too much time on social media and wants to stop. She is thinking of: deleting the apps, limiting screen time, or doing more outdoor activities. Which one would you suggest?": "Bạn của bạn dành quá nhiều thời gian cho mạng xã hội và muốn dừng lại. Bạn ấy đang cân nhắc: <strong><em>xóa các ứng dụng</em></strong>, <strong><em>giới hạn thời gian dùng màn hình</em></strong>, hoặc <strong><em>tham gia nhiều hoạt động ngoài trời hơn</em></strong>. Bạn sẽ gợi ý phương án nào?", "SITUATION 02: Your friend spends too much time on social media and wants to stop. She is thinking of: deleting the apps, limiting screen time, or doing more outdoor activities. Which one would you suggest?": "Bạn của bạn dành quá nhiều thời gian cho mạng xã hội và muốn dừng lại. Bạn ấy đang cân nhắc: <strong><em>xóa các ứng dụng</em></strong>, <strong><em>giới hạn thời gian dùng màn hình</em></strong>, hoặc <strong><em>tham gia nhiều hoạt động ngoài trời hơn</em></strong>. Bạn sẽ gợi ý phương án nào?", "Your younger sister is under pressure because of exams. You are thinking of three solutions: giving her advice, taking her out for a walk, or encouraging her to take a break. Which one would you choose?": "Em gái của bạn đang bị áp lực vì các kỳ thi sắp tới. Bạn đang nghĩ đến 3 giải pháp: <strong><em>cho em lời khuyên</em></strong>, <strong><em>dẫn em ra ngoài đi dạo thư giãn</em></strong>, hoặc <strong><em>khuyến khích em nghỉ ngơi một chút</em></strong>. Bạn sẽ chọn cách nào?", "SITUATION 03: Your younger sister is under pressure because of exams. You are thinking of three solutions: giving her advice, taking her out for a walk, or encouraging her to take a break. Which one would you choose?": "Em gái của bạn đang bị áp lực vì các kỳ thi sắp tới. Bạn đang nghĩ đến 3 giải pháp: <strong><em>cho em lời khuyên</em></strong>, <strong><em>dẫn em ra ngoài đi dạo thư giãn</em></strong>, hoặc <strong><em>khuyến khích em nghỉ ngơi một chút</em></strong>. Bạn sẽ chọn cách nào?", "Your friend is very stressed due to too much schoolwork. She is considering three options: doing exercise, talking to a friend, or taking a rest. Which one would you recommend?": "Bạn của bạn cảm thấy rất căng thẳng vì khối lượng bài vở quá nhiều ở trường. Bạn ấy đang cân nhắc 3 lựa chọn: <strong><em>tập thể dục</em></strong>, <strong><em>tâm sự với một người bạn</em></strong>, hoặc <strong><em>nghỉ ngơi thư giãn</em></strong>. Bạn sẽ khuyên phương án nào?", "SITUATION 04: Your friend is very stressed due to too much schoolwork. She is considering three options: doing exercise, talking to a friend, or taking a rest. Which one would you recommend?": "Bạn của bạn cảm thấy rất căng thẳng vì khối lượng bài vở quá nhiều ở trường. Bạn ấy đang cân nhắc 3 lựa chọn: <strong><em>tập thể dục</em></strong>, <strong><em>tâm sự với một người bạn</em></strong>, hoặc <strong><em>nghỉ ngơi thư giãn</em></strong>. Bạn sẽ khuyên phương án nào?", "Your cousin is bullied at school. There are three solutions: talk to teachers, talk to his parents, and talk to his friends. Which one is the best choice?": "Em họ của bạn bị bắt nạt ở trường học. Có 3 giải pháp được đưa ra: <strong><em>nói chuyện với thầy cô giáo</em></strong>, <strong><em>nói chuyện với bố mẹ</em></strong>, và <strong><em>tâm sự với bạn bè</em></strong>. Lựa chọn nào là tốt nhất?", "SITUATION 05: Your cousin is bullied at school. There are three solutions: talk to teachers, talk to his parents, and talk to his friends. Which one is the best choice?": "Em họ của bạn bị bắt nạt ở trường học. Có 3 giải pháp được đưa ra: <strong><em>nói chuyện với thầy cô giáo</em></strong>, <strong><em>nói chuyện với bố mẹ</em></strong>, và <strong><em>tâm sự với bạn bè</em></strong>. Lựa chọn nào là tốt nhất?", "Your brother is in love with a girl in his high school. What will you do: ask him to stop, let him continue under your control, and talk to parents?": "Em trai của bạn đang yêu một bạn nữ cùng trường cấp 3. Bạn sẽ làm gì: <strong><em>yêu cầu em dừng lại</em></strong>, <strong><em>để em tiếp tục nhưng dưới sự giám sát của bạn</em></strong>, hay <strong><em>nói chuyện với bố mẹ</em></strong>?", "SITUATION 06: Your brother is in love with a girl in his high school. What will you do: ask him to stop, let him continue under your control, and talk to parents?": "Em trai của bạn đang yêu một bạn nữ cùng trường cấp 3. Bạn sẽ làm gì: <strong><em>yêu cầu em dừng lại</em></strong>, <strong><em>để em tiếp tục nhưng dưới sự giám sát của bạn</em></strong>, hay <strong><em>nói chuyện với bố mẹ</em></strong>?", "Your sister has told lies about many things, and she continues doing this without changing. You are thinking about what to do: talk to her, talk to parents, or let her continue?": "Em gái của bạn đã nói dối về rất nhiều chuyện và vẫn tiếp tục tái diễn mà không chịu thay đổi. Bạn đang nghĩ nên làm gì: <strong><em>nói chuyện thẳng thắn với em</em></strong>, <strong><em>nói chuyện với bố mẹ</em></strong>, hay <strong><em>để mặc em tiếp tục</em></strong>?", "SITUATION 07: Your sister has told lies about many things, and she continues doing this without changing. You are thinking about what to do: talk to her, talk to parents, or let her continue?": "Em gái của bạn đã nói dối về rất nhiều chuyện và vẫn tiếp tục tái diễn mà không chịu thay đổi. Bạn đang nghĩ nên làm gì: <strong><em>nói chuyện thẳng thắn với em</em></strong>, <strong><em>nói chuyện với bố mẹ</em></strong>, hay <strong><em>để mặc em tiếp tục</em></strong>?", "You have a headache. You are thinking about what to do. Three options are: doing yoga, taking medicine, or visiting the doctor. Which is the best choice?": "Bạn đang bị đau đầu dữ dội và băn khoăn nên làm gì. Ba lựa chọn là: <strong><em>tập yoga thư giãn</em></strong>, <strong><em>uống thuốc giảm đau</em></strong>, hoặc <strong><em>đi khám bác sĩ</em></strong>. Lựa chọn nào là tốt nhất?", "SITUATION 08: You have a headache. You are thinking about what to do. Three options are: doing yoga, taking medicine, or visiting the doctor. Which is the best choice?": "Bạn đang bị đau đầu dữ dội và băn khoăn nên làm gì. Ba lựa chọn là: <strong><em>tập yoga thư giãn</em></strong>, <strong><em>uống thuốc giảm đau</em></strong>, hoặc <strong><em>đi khám bác sĩ</em></strong>. Lựa chọn nào là tốt nhất?", "You are the director of your local hospital. You wish to improve the overall quality of the hospital. Three options are considered: investing in medical equipment to enhance treatment quality, collecting feedback from patients to improve services, and expanding hospital facilities to reduce overcrowding. What would you do to achieve that goal?": "Bạn là giám đốc một bệnh viện địa phương và muốn nâng cao chất lượng toàn diện của bệnh viện. Ba phương án được cân nhắc: <strong><em>đầu tư trang thiết bị y tế hiện đại</em></strong>, <strong><em>thu thập ý kiến phản hồi của bệnh nhân để cải thiện dịch vụ</em></strong>, và <strong><em>mở rộng cơ sở vật chất để giảm quá tải</em></strong>. Bạn sẽ làm gì để đạt mục tiêu?", "SITUATION 09: You are the director of your local hospital. You wish to improve the overall quality of the hospital. Three options are considered: investing in medical equipment to enhance treatment quality, collecting feedback from patients to improve services, and expanding hospital facilities to reduce overcrowding. What would you do to achieve that goal?": "Bạn là giám đốc một bệnh viện địa phương và muốn nâng cao chất lượng toàn diện của bệnh viện. Ba phương án được cân nhắc: <strong><em>đầu tư trang thiết bị y tế hiện đại</em></strong>, <strong><em>thu thập ý kiến phản hồi của bệnh nhân để cải thiện dịch vụ</em></strong>, và <strong><em>mở rộng cơ sở vật chất để giảm quá tải</em></strong>. Bạn sẽ làm gì để đạt mục tiêu?", "Your uncle, who is 45 years old, would like to stay healthy. There are three options to choose: become a vegetarian, work out at the gym, or do exercise. Which one do you think is the best choice?": "Chú của bạn năm nay 45 tuổi và muốn giữ gìn sức khỏe dẻo dai. Có 3 lựa chọn: <strong><em>chuyển sang ăn chay</em></strong>, <strong><em>tập thể hình tại phòng gym</em></strong>, hoặc <strong><em>tập thể dục thể thao thường xuyên</em></strong>. Bạn nghĩ lựa chọn nào là tốt nhất?", "SITUATION 10: Your uncle, who is 45 years old, would like to stay healthy. There are three options to choose: become a vegetarian, work out at the gym, or do exercise. Which one do you think is the best choice?": "Chú của bạn năm nay 45 tuổi và muốn giữ gìn sức khỏe dẻo dai. Có 3 lựa chọn: <strong><em>chuyển sang ăn chay</em></strong>, <strong><em>tập thể hình tại phòng gym</em></strong>, hoặc <strong><em>tập thể dục thể thao thường xuyên</em></strong>. Bạn nghĩ lựa chọn nào là tốt nhất?", "Your sister wants to lose weight. There are three options to choose: going to the gym, going on a diet, and taking weight-loss medicine. Which one would you recommend her?": "Em gái của bạn muốn giảm cân để có vóc dáng khỏe đẹp hơn. Có 3 phương án để lựa chọn: <strong><em>đi tập gym</em></strong>, <strong><em>ăn kiêng</em></strong>, và <strong><em>uống thuốc giảm cân</em></strong>. Bạn sẽ khuyên em lựa chọn cách nào?", "SITUATION 11: Your sister wants to lose weight. There are three options to choose: going to the gym, going on a diet, and taking weight-loss medicine. Which one would you recommend her?": "Em gái của bạn muốn giảm cân để có vóc dáng khỏe đẹp hơn. Có 3 phương án để lựa chọn: <strong><em>đi tập gym</em></strong>, <strong><em>ăn kiêng</em></strong>, và <strong><em>uống thuốc giảm cân</em></strong>. Bạn sẽ khuyên em lựa chọn cách nào?", "Your school is trying to reduce the amount of plastic waste. Three solutions are suggested: encouraging students to bring reusable bottles, organizing a “no plastic day” every week, or putting up educational posters around the campus. Which one do you think is the most effective solution?": "Trường học của bạn đang nỗ lực cắt giảm lượng rác thải nhựa. Ba giải pháp được đề xuất: <strong><em>khuyến khích học sinh mang theo bình nước cá nhân tái sử dụng</em></strong>, <strong><em>tổ chức ngày không rác nhựa hàng tuần</em></strong>, hoặc <strong><em>dán áp phích tuyên truyền nâng cao ý thức quanh trường</em></strong>. Giải pháp nào mang lại hiệu quả cao nhất?", "SITUATION 12: Your school is trying to reduce the amount of plastic waste. Three solutions are suggested: encouraging students to bring reusable bottles, organizing a “no plastic day” every week, or putting up educational posters around the campus. Which one do you think is the most effective solution?": "Trường học của bạn đang nỗ lực cắt giảm lượng rác thải nhựa. Ba giải pháp được đề xuất: <strong><em>khuyến khích học sinh mang theo bình nước cá nhân tái sử dụng</em></strong>, <strong><em>tổ chức ngày không rác nhựa hàng tuần</em></strong>, hoặc <strong><em>dán áp phích tuyên truyền nâng cao ý thức quanh trường</em></strong>. Giải pháp nào mang lại hiệu quả cao nhất?", "Your friend is not good at foreign languages and wants to improve his English. Three options are: taking an English course, talking with friends at home, or joining an English-speaking club. Which one would you recommend?": "Bạn của bạn không giỏi ngoại ngữ và đang rất muốn cải thiện vốn tiếng Anh. Ba phương án là: <strong><em>tham gia một khóa học tiếng Anh</em></strong>, <strong><em>tự luyện nói với bạn bè tại nhà</em></strong>, hoặc <strong><em>tham gia câu lạc bộ tiếng Anh</em></strong>. Bạn sẽ khuyên bạn ấy chọn cách nào?", "SITUATION 13: Your friend is not good at foreign languages and wants to improve his English. Three options are: taking an English course, talking with friends at home, or joining an English-speaking club. Which one would you recommend?": "Bạn của bạn không giỏi ngoại ngữ và đang rất muốn cải thiện vốn tiếng Anh. Ba phương án là: <strong><em>tham gia một khóa học tiếng Anh</em></strong>, <strong><em>tự luyện nói với bạn bè tại nhà</em></strong>, hoặc <strong><em>tham gia câu lạc bộ tiếng Anh</em></strong>. Bạn sẽ khuyên bạn ấy chọn cách nào?", "A group of your foreign students wants to learn Vietnamese history. Three activities are considered: visiting a museum, watching documentaries, and reading history books. Which one do you think is the best choice?": "Một nhóm sinh viên nước ngoài của bạn muốn tìm hiểu và học hỏi về lịch sử Việt Nam. Ba hoạt động được cân nhắc: <strong><em>tham quan viện bảo tàng lịch sử</em></strong>, <strong><em>xem các bộ phim tài liệu</em></strong>, và <strong><em>đọc sách lịch sử</em></strong>. Bạn nghĩ hoạt động nào là lựa chọn tuyệt vời nhất?", "SITUATION 14: A group of your foreign students wants to learn Vietnamese history. Three activities are considered: visiting a museum, watching documentaries, and reading history books. Which one do you think is the best choice?": "Một nhóm sinh viên nước ngoài của bạn muốn tìm hiểu và học hỏi về lịch sử Việt Nam. Ba hoạt động được cân nhắc: <strong><em>tham quan viện bảo tàng lịch sử</em></strong>, <strong><em>xem các bộ phim tài liệu</em></strong>, và <strong><em>đọc sách lịch sử</em></strong>. Bạn nghĩ hoạt động nào là lựa chọn tuyệt vời nhất?", "You want to improve your English skills. You are considering three options: joining an English club, talking with native speakers, and travelling abroad. Which option do you think is the most effective, and why?": "Bạn muốn nâng cao kỹ năng tiếng Anh và đang cân nhắc ba phương án: <strong><em>tham gia câu lạc bộ tiếng Anh</em></strong>, <strong><em>trò chuyện với người bản xứ</em></strong>, và <strong><em>đi du lịch nước ngoài</em></strong>. Lựa chọn nào theo bạn là hiệu quả nhất và tại sao?", "SITUATION 15: You want to improve your English skills. You are considering three options: joining an English club, talking with native speakers, and travelling abroad. Which option do you think is the most effective, and why?": "Bạn muốn nâng cao kỹ năng tiếng Anh và đang cân nhắc ba phương án: <strong><em>tham gia câu lạc bộ tiếng Anh</em></strong>, <strong><em>trò chuyện với người bản xứ</em></strong>, và <strong><em>đi du lịch nước ngoài</em></strong>. Lựa chọn nào theo bạn là hiệu quả nhất và tại sao?", "Teachers at a high school are considering how to assess students. Three choices are suggested: teacher assessment, self-assessment, and peer assessment. Which one is the best choice?": "Các giáo viên tại một trường trung học phổ thông đang cân nhắc cách đánh giá học sinh. Có 3 hình thức được đề xuất: <strong><em>giáo viên đánh giá</em></strong>, <strong><em>học sinh tự đánh giá</em></strong>, và <strong><em>các bạn cùng lớp đánh giá lẫn nhau</em></strong>. Hình thức nào là lựa chọn tốt nhất?", "SITUATION 01: Teachers at a high school are considering how to assess students. Three choices are suggested: teacher assessment, self-assessment, and peer assessment. Which one is the best choice?": "Các giáo viên tại một trường trung học phổ thông đang cân nhắc cách đánh giá học sinh. Có 3 hình thức được đề xuất: <strong><em>giáo viên đánh giá</em></strong>, <strong><em>học sinh tự đánh giá</em></strong>, và <strong><em>các bạn cùng lớp đánh giá lẫn nhau</em></strong>. Hình thức nào là lựa chọn tốt nhất?", "Your company is considering three promotional methods: offering discounts, distributing free samples, and organizing lucky draws. Which method do you think is the best choice?": "Công ty của bạn đang cân nhắc 3 hình thức khuyến mãi để thu hút khách hàng: <strong><em>giảm giá trực tiếp</em></strong>, <strong><em>phát mẫu dùng thử miễn phí</em></strong>, và <strong><em>tổ chức bốc thăm trúng thưởng</em></strong>. Bạn nghĩ phương thức nào hiệu quả nhất?", "SITUATION 02: Your company is considering three promotional methods: offering discounts, distributing free samples, and organizing lucky draws. Which method do you think is the best choice?": "Công ty của bạn đang cân nhắc 3 hình thức khuyến mãi để thu hút khách hàng: <strong><em>giảm giá trực tiếp</em></strong>, <strong><em>phát mẫu dùng thử miễn phí</em></strong>, và <strong><em>tổ chức bốc thăm trúng thưởng</em></strong>. Bạn nghĩ phương thức nào hiệu quả nhất?", "Your club wants to raise funds for a local charity project. You can choose one activity: organizing a charity run, hosting a bake sale, or holding an art auction. Which one would you recommend?": "Câu lạc bộ của bạn muốn gây quỹ cho một dự án từ thiện địa phương. Bạn có thể chọn 1 hoạt động: <strong><em>tổ chức một giải chạy bộ từ thiện</em></strong>, <strong><em>bán bánh tự làm gây quỹ</em></strong>, hoặc <strong><em>tổ chức buổi đấu giá tranh nghệ thuật</em></strong>. Bạn sẽ đề xuất hoạt động nào?", "SITUATION 03: Your club wants to raise funds for a local charity project. You can choose one activity: organizing a charity run, hosting a bake sale, or holding an art auction. Which one would you recommend?": "Câu lạc bộ của bạn muốn gây quỹ cho một dự án từ thiện địa phương. Bạn có thể chọn 1 hoạt động: <strong><em>tổ chức một giải chạy bộ từ thiện</em></strong>, <strong><em>bán bánh tự làm gây quỹ</em></strong>, hoặc <strong><em>tổ chức buổi đấu giá tranh nghệ thuật</em></strong>. Bạn sẽ đề xuất hoạt động nào?", "Your group is tasked with conducting a customer satisfaction survey. Three formats are considered: face-to-face interviews, online questionnaires, and telephone surveys. Which format would you choose?": "Nhóm của bạn được giao nhiệm vụ thực hiện một cuộc khảo sát mức độ hài lòng của khách hàng: <strong><em>phỏng vấn trực tiếp mặt đối mặt</em></strong>, <strong><em>bảng câu hỏi trực tuyến qua mạng</em></strong>, và <strong><em>khảo sát qua điện thoại</em></strong>. Bạn sẽ lựa chọn hình thức nào?", "SITUATION 04: Your group is tasked with conducting a customer satisfaction survey. Three formats are considered: face-to-face interviews, online questionnaires, and telephone surveys. Which format would you choose?": "Nhóm của bạn được giao nhiệm vụ thực hiện một cuộc khảo sát mức độ hài lòng của khách hàng: <strong><em>phỏng vấn trực tiếp mặt đối mặt</em></strong>, <strong><em>bảng câu hỏi trực tuyến qua mạng</em></strong>, và <strong><em>khảo sát qua điện thoại</em></strong>. Bạn sẽ lựa chọn hình thức nào?", "Your school wants to promote a new environmental campaign. Three advertising channels are suggested: social media, printed flyers, and school banners. Which channel is the most effective?": "Trường học của bạn muốn tuyên truyền quảng bá một chiến dịch bảo vệ môi trường mới: <strong><em>mạng xã hội</em></strong>, <strong><em>tờ rơi in màu</em></strong>, và <strong><em>băng rôn áp phích treo trong trường</em></strong>. Kênh truyền thông nào hiệu quả nhất?", "SITUATION 05: Your school wants to promote a new environmental campaign. Three advertising channels are suggested: social media, printed flyers, and school banners. Which channel is the most effective?": "Trường học của bạn muốn tuyên truyền quảng bá một chiến dịch bảo vệ môi trường mới: <strong><em>mạng xã hội</em></strong>, <strong><em>tờ rơi in màu</em></strong>, và <strong><em>băng rôn áp phích treo trong trường</em></strong>. Kênh truyền thông nào hiệu quả nhất?", "You are preparing a presentation on a new product. There are three options for you to choose to present the product: a PowerPoint slide, a poster, and a video. Which is the best choice?": "Bạn đang chuẩn bị một bài thuyết trình về một sản phẩm mới. Có 3 hình thức để bạn lựa chọn trình bày sản phẩm: <strong><em>bản trình chiếu PowerPoint</em></strong>, <strong><em>áp phích poster</em></strong>, và <strong><em>video clip</em></strong>. Hình thức nào là lựa chọn tốt nhất?", "SITUATION 06: You are preparing a presentation on a new product. There are three options for you to choose to present the product: a PowerPoint slide, a poster, and a video. Which is the best choice?": "Bạn đang chuẩn bị một bài thuyết trình về một sản phẩm mới. Có 3 hình thức để bạn lựa chọn trình bày sản phẩm: <strong><em>bản trình chiếu PowerPoint</em></strong>, <strong><em>áp phích poster</em></strong>, và <strong><em>video clip</em></strong>. Hình thức nào là lựa chọn tốt nhất?", "You are going to give a presentation next week. You need to choose a topic that will be interesting for your audience. There are three options: local music, famous architecture, and environmental programs. Which one would you choose?": "Bạn sẽ có một bài thuyết trình vào tuần tới và cần chọn một chủ đề thú vị đối với khán giả. Có ba lựa chọn: <strong><em>âm nhạc địa phương</em></strong>, <strong><em>kiến trúc nổi tiếng</em></strong>, hoặc <strong><em>các chương trình về môi trường</em></strong>. Bạn sẽ chọn chủ đề nào?", "SITUATION 07: You are going to give a presentation next week. You need to choose a topic that will be interesting for your audience. There are three options: local music, famous architecture, and environmental programs. Which one would you choose?": "Bạn sẽ có một bài thuyết trình vào tuần tới và cần chọn một chủ đề thú vị đối với khán giả. Có ba lựa chọn: <strong><em>âm nhạc địa phương</em></strong>, <strong><em>kiến trúc nổi tiếng</em></strong>, hoặc <strong><em>các chương trình về môi trường</em></strong>. Bạn sẽ chọn chủ đề nào?", "Your school is about to conduct a survey to find out students’ opinions on issues that have a heavy impact on the community. Three actions are considered: smoking in restaurants, using mobile phones while driving, and making noise in public places. Which one do you think has the heaviest impact on the community?": "Trường học của bạn chuẩn bị thực hiện khảo sát ý kiến học sinh về các hành vi gây ảnh hưởng nghiêm trọng đến cộng đồng: <strong><em>hút thuốc tại nhà hàng</em></strong>, <strong><em>dùng điện thoại khi lái xe</em></strong>, và <strong><em>làm ồn nơi công cộng</em></strong>. Bạn nghĩ hành vi nào gây ảnh hưởng tiêu cực nhất?", "SITUATION 01: Your school is about to conduct a survey to find out students’ opinions on issues that have a heavy impact on the community. Three actions are considered: smoking in restaurants, using mobile phones while driving, and making noise in public places. Which one do you think has the heaviest impact on the community?": "Trường học của bạn chuẩn bị thực hiện khảo sát ý kiến học sinh về các hành vi gây ảnh hưởng nghiêm trọng đến cộng đồng: <strong><em>hút thuốc tại nhà hàng</em></strong>, <strong><em>dùng điện thoại khi lái xe</em></strong>, và <strong><em>làm ồn nơi công cộng</em></strong>. Bạn nghĩ hành vi nào gây ảnh hưởng tiêu cực nhất?", "Your co-worker wants to learn to play the guitar. There are three possible options: using a tutorial app, taking part in a private course, or learning from a friend who plays guitar well. Which one do you think is the best choice?": "Đồng nghiệp của bạn muốn học chơi đàn guitar. Có 3 lựa chọn khả thi: <strong><em>dùng ứng dụng tự học trên điện thoại</em></strong>, <strong><em>tham gia khóa học kèm riêng với gia sư</em></strong>, hoặc <strong><em>học từ một người bạn chơi guitar giỏi</em></strong>. Lựa chọn nào là tốt nhất?", "SITUATION 02: Your co-worker wants to learn to play the guitar. There are three possible options: using a tutorial app, taking part in a private course, or learning from a friend who plays guitar well. Which one do you think is the best choice?": "Đồng nghiệp của bạn muốn học chơi đàn guitar. Có 3 lựa chọn khả thi: <strong><em>dùng ứng dụng tự học trên điện thoại</em></strong>, <strong><em>tham gia khóa học kèm riêng với gia sư</em></strong>, hoặc <strong><em>học từ một người bạn chơi guitar giỏi</em></strong>. Lựa chọn nào là tốt nhất?", "Your school is organizing a presentation about your country. You can choose one topic to talk about: cultural events, historical achievements, or economic achievements. Which one would you choose?": "Trường bạn đang tổ chức buổi thuyết trình giới thiệu về đất nước. Bạn có thể chọn một chủ đề để trình bày: <strong><em>các sự kiện lễ hội văn hóa</em></strong>, <strong><em>những thành tựu lịch sử vẻ vang</em></strong>, hoặc <strong><em>những thành tựu phát triển kinh tế</em></strong>. Bạn sẽ chọn chủ đề nào?", "SITUATION 03: Your school is organizing a presentation about your country. You can choose one topic to talk about: cultural events, historical achievements, or economic achievements. Which one would you choose?": "Trường bạn đang tổ chức buổi thuyết trình giới thiệu về đất nước. Bạn có thể chọn một chủ đề để trình bày: <strong><em>các sự kiện lễ hội văn hóa</em></strong>, <strong><em>những thành tựu lịch sử vẻ vang</em></strong>, hoặc <strong><em>những thành tựu phát triển kinh tế</em></strong>. Bạn sẽ chọn chủ đề nào?", "Your foreign friend wants to learn more about Vietnamese culture during her short trip. She can choose between visiting a traditional village, attending a local festival, or exploring a national museum. Which place would you recommend?": "Một người bạn nước ngoài muốn tìm hiểu sâu hơn về văn hóa Việt Nam trong chuyến du lịch ngắn ngày. Bạn ấy có thể chọn giữa: <strong><em>thăm làng nghề truyền thống</em></strong>, <strong><em>tham dự lễ hội địa phương</em></strong>, hoặc <strong><em>khám phá bảo tàng quốc gia</em></strong>. Bạn sẽ gợi ý nơi nào?", "SITUATION 04: Your foreign friend wants to learn more about Vietnamese culture during her short trip. She can choose between visiting a traditional village, attending a local festival, or exploring a national museum. Which place would you recommend?": "Một người bạn nước ngoài muốn tìm hiểu sâu hơn về văn hóa Việt Nam trong chuyến du lịch ngắn ngày. Bạn ấy có thể chọn giữa: <strong><em>thăm làng nghề truyền thống</em></strong>, <strong><em>tham dự lễ hội địa phương</em></strong>, hoặc <strong><em>khám phá bảo tàng quốc gia</em></strong>. Bạn sẽ gợi ý nơi nào?", "You and your friends are going to celebrate a special occasion together. You are considering three types of meals: a barbecue, a buffet, or a sit-down dinner at a restaurant. Which one would you choose?": "Bạn và nhóm bạn thân sắp tổ chức kỷ niệm một dịp đặc biệt. Bạn đang cân nhắc 3 hình thức ăn uống: <strong><em>tiệc nướng ngoài trời (BBQ)</em></strong>, <strong><em>tiệc tự chọn (buffet)</em></strong>, hoặc <strong><em>bữa tối gọi món trang trọng tại nhà hàng</em></strong>. Bạn sẽ chọn hình thức nào?", "SITUATION 05: You and your friends are going to celebrate a special occasion together. You are considering three types of meals: a barbecue, a buffet, or a sit-down dinner at a restaurant. Which one would you choose?": "Bạn và nhóm bạn thân sắp tổ chức kỷ niệm một dịp đặc biệt. Bạn đang cân nhắc 3 hình thức ăn uống: <strong><em>tiệc nướng ngoài trời (BBQ)</em></strong>, <strong><em>tiệc tự chọn (buffet)</em></strong>, hoặc <strong><em>bữa tối gọi món trang trọng tại nhà hàng</em></strong>. Bạn sẽ chọn hình thức nào?", "Your school is organizing a science event, and students are encouraged to contribute in some way. You are considering three options: donating science books, inviting a scientist to give a talk, or organizing a science-themed game. Which one would you choose?": "Trường của bạn đang tổ chức sự kiện khoa học và khuyến khích học sinh đóng góp. Bạn đang cân nhắc 3 phương án: <strong><em>quyên góp sách khoa học</em></strong>, <strong><em>mời một nhà khoa học đến nói chuyện chia sẻ</em></strong>, hoặc <strong><em>tổ chức trò chơi đố vui chủ đề khoa học</em></strong>. Bạn sẽ chọn đóng góp theo cách nào?", "SITUATION 06: Your school is organizing a science event, and students are encouraged to contribute in some way. You are considering three options: donating science books, inviting a scientist to give a talk, or organizing a science-themed game. Which one would you choose?": "Trường của bạn đang tổ chức sự kiện khoa học và khuyến khích học sinh đóng góp. Bạn đang cân nhắc 3 phương án: <strong><em>quyên góp sách khoa học</em></strong>, <strong><em>mời một nhà khoa học đến nói chuyện chia sẻ</em></strong>, hoặc <strong><em>tổ chức trò chơi đố vui chủ đề khoa học</em></strong>. Bạn sẽ chọn đóng góp theo cách nào?", "You are going to study abroad for a short period of time. You want to take a course to improve yourself. You are considering three options: a computer course, a public speaking course, and a time management course. What do you choose?": "Bạn chuẩn bị đi du học ngắn hạn và muốn tham gia một khóa học ngắn để hoàn thiện bản thân: <strong><em>khóa học máy tính &amp; tin học</em></strong>, <strong><em>khóa học kỹ năng thuyết trình trước đám đông</em></strong>, và <strong><em>khóa học quản lý thời gian</em></strong>. Bạn sẽ chọn khóa học nào?", "SITUATION 07: You are going to study abroad for a short period of time. You want to take a course to improve yourself. You are considering three options: a computer course, a public speaking course, and a time management course. What do you choose?": "Bạn chuẩn bị đi du học ngắn hạn và muốn tham gia một khóa học ngắn để hoàn thiện bản thân: <strong><em>khóa học máy tính &amp; tin học</em></strong>, <strong><em>khóa học kỹ năng thuyết trình trước đám đông</em></strong>, và <strong><em>khóa học quản lý thời gian</em></strong>. Bạn sẽ chọn khóa học nào?", "Your school is going to organize a year-end party for students. You are asked to take part in the preparation. You are considering three options: decorating the event area, being in charge of organizing the event, and inviting special guests. Which option would you choose?": "Trường của bạn chuẩn bị tổ chức tiệc tất niên cuối năm cho học sinh và bạn được mời tham gia ban chuẩn bị. Có 3 nhiệm vụ: <strong><em>trang trí khu vực sự kiện</em></strong>, <strong><em>phụ trách điều phối &amp; tổ chức chương trình</em></strong>, và <strong><em>tiếp đón &amp; mời các khách mời đặc biệt</em></strong>. Bạn sẽ chọn đảm nhận công việc nào?", "SITUATION 08: Your school is going to organize a year-end party for students. You are asked to take part in the preparation. You are considering three options: decorating the event area, being in charge of organizing the event, and inviting special guests. Which option would you choose?": "Trường của bạn chuẩn bị tổ chức tiệc tất niên cuối năm cho học sinh và bạn được mời tham gia ban chuẩn bị. Có 3 nhiệm vụ: <strong><em>trang trí khu vực sự kiện</em></strong>, <strong><em>phụ trách điều phối &amp; tổ chức chương trình</em></strong>, và <strong><em>tiếp đón &amp; mời các khách mời đặc biệt</em></strong>. Bạn sẽ chọn đảm nhận công việc nào?", "Your local authority is planning to improve traffic safety in your city. You are asked to choose the most effective solution among the following: raising public awareness of traffic laws, increasing the legal driving age, and placing more traffic signs around the city. Which one is the best choice?": "Chính quyền địa phương đang lên kế hoạch cải thiện an toàn giao thông đô thị. Bạn được hỏi ý kiến để chọn giải pháp hiệu quả nhất: <strong><em>nâng cao ý thức người dân về luật giao thông</em></strong>, <strong><em>tăng độ tuổi lái xe hợp pháp</em></strong>, và <strong><em>lắp đặt thêm biển báo giao thông quanh thành phố</em></strong>. Giải pháp nào là tốt nhất?", "SITUATION 09: Your local authority is planning to improve traffic safety in your city. You are asked to choose the most effective solution among the following: raising public awareness of traffic laws, increasing the legal driving age, and placing more traffic signs around the city. Which one is the best choice?": "Chính quyền địa phương đang lên kế hoạch cải thiện an toàn giao thông đô thị. Bạn được hỏi ý kiến để chọn giải pháp hiệu quả nhất: <strong><em>nâng cao ý thức người dân về luật giao thông</em></strong>, <strong><em>tăng độ tuổi lái xe hợp pháp</em></strong>, và <strong><em>lắp đặt thêm biển báo giao thông quanh thành phố</em></strong>. Giải pháp nào là tốt nhất?", "You are going to organize a workshop for students who are looking for internships. You are considering three main topics to include in your workshop: how to improve workplace skills, how to prepare well for job interviews, or how to write an impressive CV/resumé. Which one is the best choice?": "Bạn chuẩn bị tổ chức hội thảo dành cho sinh viên đang tìm kiếm cơ hội thực tập. Bạn cân nhắc 3 chủ đề trọng tâm: <strong><em>cách rèn luyện kỹ năng làm việc thực tế</em></strong>, <strong><em>cách chuẩn bị tốt cho buổi phỏng vấn xin việc</em></strong>, hoặc <strong><em>cách viết CV/hồ sơ ứng tuyển ấn tượng</em></strong>. Chủ đề nào thiết thực nhất?", "SITUATION 10: You are going to organize a workshop for students who are looking for internships. You are considering three main topics to include in your workshop: how to improve workplace skills, how to prepare well for job interviews, or how to write an impressive CV/resumé. Which one is the best choice?": "Bạn chuẩn bị tổ chức hội thảo dành cho sinh viên đang tìm kiếm cơ hội thực tập. Bạn cân nhắc 3 chủ đề trọng tâm: <strong><em>cách rèn luyện kỹ năng làm việc thực tế</em></strong>, <strong><em>cách chuẩn bị tốt cho buổi phỏng vấn xin việc</em></strong>, hoặc <strong><em>cách viết CV/hồ sơ ứng tuyển ấn tượng</em></strong>. Chủ đề nào thiết thực nhất?", "Your younger brother has just graduated from high school and is unsure about what to do next. You are considering three options to suggest to him: finding a job, continuing his studies, or doing volunteer work. Which one would you recommend?": "Em trai của bạn vừa tốt nghiệp cấp 3 và chưa biết nên làm gì tiếp theo. Bạn cân nhắc 3 hướng đi để gợi ý cho em: <strong><em>tìm kiếm một công việc đi làm ngay</em></strong>, <strong><em>tiếp tục học lên cao đẳng/đại học</em></strong>, hoặc <strong><em>tham gia các hoạt động tình nguyện xã hội</em></strong>. Bạn sẽ khuyên em theo hướng nào?", "SITUATION 11: Your younger brother has just graduated from high school and is unsure about what to do next. You are considering three options to suggest to him: finding a job, continuing his studies, or doing volunteer work. Which one would you recommend?": "Em trai của bạn vừa tốt nghiệp cấp 3 và chưa biết nên làm gì tiếp theo. Bạn cân nhắc 3 hướng đi để gợi ý cho em: <strong><em>tìm kiếm một công việc đi làm ngay</em></strong>, <strong><em>tiếp tục học lên cao đẳng/đại học</em></strong>, hoặc <strong><em>tham gia các hoạt động tình nguyện xã hội</em></strong>. Bạn sẽ khuyên em theo hướng nào?", "One day, you receive a large amount of money transferred to your bank account by mistake. You don’t know who sent it. You are considering three options: keeping silent and doing nothing, informing your bank about the transfer, and reporting the case to the police. Which one would you choose?": "Một ngày nọ, bạn bất ngờ nhận được một khoản tiền lớn chuyển nhầm vào tài khoản ngân hàng mà không rõ ai gửi. Bạn cân nhắc 3 cách xử lý: <strong><em>giữ im lặng và không làm gì cả</em></strong>, <strong><em>thông báo ngay cho ngân hàng về giao dịch nhầm</em></strong>, và <strong><em>trình báo sự việc cho cơ quan công an</em></strong>. Bạn sẽ chọn cách xử lý nào?", "SITUATION 12: One day, you receive a large amount of money transferred to your bank account by mistake. You don’t know who sent it. You are considering three options: keeping silent and doing nothing, informing your bank about the transfer, and reporting the case to the police. Which one would you choose?": "Một ngày nọ, bạn bất ngờ nhận được một khoản tiền lớn chuyển nhầm vào tài khoản ngân hàng mà không rõ ai gửi. Bạn cân nhắc 3 cách xử lý: <strong><em>giữ im lặng và không làm gì cả</em></strong>, <strong><em>thông báo ngay cho ngân hàng về giao dịch nhầm</em></strong>, và <strong><em>trình báo sự việc cho cơ quan công an</em></strong>. Bạn sẽ chọn cách xử lý nào?", "Your friend wants to read something new to expand her knowledge and explore the world in a different way. You are considering three book options to recommend to her: a mystery novel, a romance novel, and a science fiction book. Which one would you choose?": "Bạn của bạn muốn đọc một thể loại sách mới để mở rộng vốn hiểu biết và khám phá thế giới qua lăng kính mới. Bạn cân nhắc 3 thể loại để giới thiệu: <strong><em>tiểu thuyết trinh thám ly kỳ</em></strong>, <strong><em>tiểu thuyết tình cảm lãng mạn</em></strong>, và <strong><em>sách khoa học viễn tưởng</em></strong>. Bạn sẽ khuyên chọn cuốn sách nào?", "SITUATION 13: Your friend wants to read something new to expand her knowledge and explore the world in a different way. You are considering three book options to recommend to her: a mystery novel, a romance novel, and a science fiction book. Which one would you choose?": "Bạn của bạn muốn đọc một thể loại sách mới để mở rộng vốn hiểu biết và khám phá thế giới qua lăng kính mới. Bạn cân nhắc 3 thể loại để giới thiệu: <strong><em>tiểu thuyết trinh thám ly kỳ</em></strong>, <strong><em>tiểu thuyết tình cảm lãng mạn</em></strong>, và <strong><em>sách khoa học viễn tưởng</em></strong>. Bạn sẽ khuyên chọn cuốn sách nào?", "Your youth club is supposed to invite a speaker to talk about his/her life experience. Three options are suggested: a famous singer, a company president, or an excellent student. Which one is the best choice?": "Câu lạc bộ thanh niên của bạn dự kiến mời một diễn giả đến chia sẻ về kinh nghiệm sống. Ba phương án được đề xuất: <strong><em>một ca sĩ nổi tiếng</em></strong>, <strong><em>một chủ tịch công ty</em></strong>, hoặc <strong><em>một học sinh/sinh viên xuất sắc</em></strong>. Lựa chọn nào là tốt nhất?", "SITUATION 14: Your youth club is supposed to invite a speaker to talk about his/her life experience. Three options are suggested: a famous singer, a company president, or an excellent student. Which one is the best choice?": "Câu lạc bộ thanh niên của bạn dự kiến mời một diễn giả đến chia sẻ về kinh nghiệm sống. Ba phương án được đề xuất: <strong><em>một ca sĩ nổi tiếng</em></strong>, <strong><em>một chủ tịch công ty</em></strong>, hoặc <strong><em>một học sinh/sinh viên xuất sắc</em></strong>. Lựa chọn nào là tốt nhất?", "You are going to organize a workshop about healthy living. You need to choose a suitable guest speaker. There are three options: a nutritionist, a gym trainer, and a yoga instructor. Which one would you choose, and why?": "Bạn dự định tổ chức một hội thảo về lối sống lành mạnh và cần chọn một diễn giả phù hợp. Có ba lựa chọn: <strong><em>chuyên gia dinh dưỡng</em></strong>, <strong><em>huấn luyện viên thể hình (PT gym)</em></strong>, và <strong><em>người hướng dẫn yoga</em></strong>. Bạn sẽ chọn ai và tại sao?", "SITUATION 15: You are going to organize a workshop about healthy living. You need to choose a suitable guest speaker. There are three options: a nutritionist, a gym trainer, and a yoga instructor. Which one would you choose, and why?": "Bạn dự định tổ chức một hội thảo về lối sống lành mạnh và cần chọn một diễn giả phù hợp. Có ba lựa chọn: <strong><em>chuyên gia dinh dưỡng</em></strong>, <strong><em>huấn luyện viên thể hình (PT gym)</em></strong>, và <strong><em>người hướng dẫn yoga</em></strong>. Bạn sẽ chọn ai và tại sao?", "Your friend is deciding what to read next. She is considering three genres: a science non-fiction book, a science-fiction book, or an adventure novel. Which one would you recommend her, and why?": "Bạn của bạn đang phân vân chọn cuốn sách tiếp theo để đọc. Cô ấy đang cân nhắc ba thể loại: <strong><em>sách khoa học thường thức (phi hư cấu)</em></strong>, <strong><em>sách khoa học viễn tưởng</em></strong>, hoặc <strong><em>tiểu thuyết phiêu lưu</em></strong>. Bạn khuyên cô ấy nên chọn cuốn sách nào và tại sao?", "SITUATION 16: Your friend is deciding what to read next. She is considering three genres: a science non-fiction book, a science-fiction book, or an adventure novel. Which one would you recommend her, and why?": "Bạn của bạn đang phân vân chọn cuốn sách tiếp theo để đọc. Cô ấy đang cân nhắc ba thể loại: <strong><em>sách khoa học thường thức (phi hư cấu)</em></strong>, <strong><em>sách khoa học viễn tưởng</em></strong>, hoặc <strong><em>tiểu thuyết phiêu lưu</em></strong>. Bạn khuyên cô ấy nên chọn cuốn sách nào và tại sao?"};

window.toggleTranslation = function(btn) {
    const card = btn.closest('.practice-situation-card') || btn.closest('.prompt-banner-box') || btn.closest('.sample-spotlight');
    if (!card) return;
    const transBox = card.querySelector('.sit-translation-box');
    if (!transBox) return;

    const isHidden = transBox.classList.contains('hidden');
    if (isHidden) {
        transBox.classList.remove('hidden');
        btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Ẩn dịch';
        btn.style.color = 'var(--primary)';
        btn.style.borderColor = 'var(--primary)';
        btn.style.background = 'rgba(37, 99, 235, 0.08)';
    } else {
        transBox.classList.add('hidden');
        btn.innerHTML = '<i class="fa-solid fa-language"></i> Dịch đề';
        btn.style.color = '';
        btn.style.borderColor = '';
        btn.style.background = '';
    }
};

window.toggleSampleAnswer = function(btn) {
    const card = btn.closest('.practice-situation-card') || btn.closest('.prompt-banner-box') || btn.closest('.sample-spotlight');
    if (!card) return;
    const sampleBox = card.querySelector('.sit-sample-box');
    const ideasBox = card.querySelector('.sit-ideas-box');
    const ideasBtn = card.querySelector('.btn-ideas-toggle');
    const sampleBtn = card.querySelector('.btn-sample-toggle') || btn;
    if (!sampleBox) return;

    const isCurrentlyActive = sampleBtn.classList.contains('active-tab-sample') && !sampleBox.classList.contains('hidden') && sampleBox.style.display !== 'none';

    if (isCurrentlyActive) {
        // Thu gọn khi bấm lại chính tab đang mở
        sampleBox.classList.add('hidden');
        sampleBox.style.display = 'none';
        sampleBtn.classList.remove('active-tab-sample');
    } else {
        // Chuyển sang Tab Bài nói mẫu mượt mà tức thì, không cần bấm Ẩn
        if (ideasBox) {
            ideasBox.classList.add('hidden');
            ideasBox.style.display = 'none';
        }
        if (ideasBtn) {
            ideasBtn.classList.remove('active-tab-ideas');
        }

        sampleBox.classList.remove('hidden');
        sampleBox.style.display = 'block';
        sampleBtn.classList.add('active-tab-sample');

        // Đảm bảo panel bài mẫu bên trong hiển thị
        const activePanel = sampleBox.querySelector('.sit-sample-opt-panel:not(.hidden)') || sampleBox.querySelector('.sit-sample-opt-panel');
        if (activePanel) {
            activePanel.classList.remove('hidden');
            activePanel.style.display = 'block';
        }
    }
};

window.toggleIdeas = function(btn) {
    const card = btn.closest('.practice-situation-card') || btn.closest('.prompt-banner-box') || btn.closest('.sample-spotlight');
    if (!card) return;
    const ideasBox = card.querySelector('.sit-ideas-box');
    const sampleBox = card.querySelector('.sit-sample-box');
    const sampleBtn = card.querySelector('.btn-sample-toggle');
    const ideasBtn = card.querySelector('.btn-ideas-toggle') || btn;
    if (!ideasBox) return;

    const isCurrentlyActive = ideasBtn.classList.contains('active-tab-ideas') && !ideasBox.classList.contains('hidden') && ideasBox.style.display !== 'none';

    if (isCurrentlyActive) {
        // Thu gọn khi bấm lại chính tab đang mở
        ideasBox.classList.add('hidden');
        ideasBox.style.display = 'none';
        ideasBtn.classList.remove('active-tab-ideas');
    } else {
        // Chuyển sang Tab Gợi ý ý tưởng mượt mà tức thì, không cần bấm Ẩn
        if (sampleBox) {
            sampleBox.classList.add('hidden');
            sampleBox.style.display = 'none';
        }
        if (sampleBtn) {
            sampleBtn.classList.remove('active-tab-sample');
        }

        ideasBox.classList.remove('hidden');
        ideasBox.style.display = 'block';
        ideasBtn.classList.add('active-tab-ideas');

        // Đảm bảo panel ý tưởng bên trong hiển thị
        const activePanel = ideasBox.querySelector('.sit-ideas-opt-panel:not(.hidden)') || ideasBox.querySelector('.sit-ideas-opt-panel');
        if (activePanel) {
            activePanel.classList.remove('hidden');
            activePanel.style.display = 'block';
        }
    }
};

window.closeSitPanel = function(btn) {
    const card = btn.closest('.practice-situation-card') || btn.closest('.prompt-banner-box') || btn.closest('.sample-spotlight');
    if (!card) return;
    const ideasBox = card.querySelector('.sit-ideas-box');
    const sampleBox = card.querySelector('.sit-sample-box');
    const ideasBtn = card.querySelector('.btn-ideas-toggle');
    const sampleBtn = card.querySelector('.btn-sample-toggle');

    if (ideasBox) {
        ideasBox.classList.add('hidden');
        ideasBox.style.display = 'none';
    }
    if (sampleBox) {
        sampleBox.classList.add('hidden');
        sampleBox.style.display = 'none';
    }
    if (ideasBtn) ideasBtn.classList.remove('active-tab-ideas');
    if (sampleBtn) sampleBtn.classList.remove('active-tab-sample');
};

window.switchToSample = function(btn) {
    const card = btn.closest('.practice-situation-card') || btn.closest('.prompt-banner-box') || btn.closest('.sample-spotlight');
    if (!card) return;
    const sampleBtn = card.querySelector('.btn-sample-toggle');
    if (sampleBtn) window.toggleSampleAnswer(sampleBtn);
};

window.switchToIdeas = function(btn) {
    const card = btn.closest('.practice-situation-card') || btn.closest('.prompt-banner-box') || btn.closest('.sample-spotlight');
    if (!card) return;
    const ideasBtn = card.querySelector('.btn-ideas-toggle');
    if (ideasBtn) window.toggleIdeas(ideasBtn);
};

window.switchIdeaCard = function(btn, panelId) {
    const box = btn.closest('.sit-ideas-box');
    if (!box) return;
    const nav = btn.closest('.sit-ideas-nav');
    if (nav) {
        nav.querySelectorAll('.sit-ideas-opt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }
    box.querySelectorAll('.sit-ideas-opt-panel').forEach(p => {
        p.classList.add('hidden');
        p.style.display = 'none';
    });
    const target = box.querySelector('#' + panelId);
    if (target) {
        target.classList.remove('hidden');
        target.style.display = 'block';
    }
};

window.switchSampleCard = function(btn, panelId) {
    const box = btn.closest('.sit-sample-box');
    if (!box) return;
    
    // Switch active button in the nav
    const nav = btn.closest('.sit-sample-nav');
    if (nav) {
        nav.querySelectorAll('.sit-sample-opt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }
    
    // Hide all panels inside this box, then show target
    box.querySelectorAll('.sit-sample-opt-panel').forEach(p => {
        p.classList.add('hidden');
        p.style.display = 'none';
    });
    const targetPanel = box.querySelector('#' + panelId) || document.getElementById(panelId);
    if (targetPanel) {
        targetPanel.classList.remove('hidden');
        targetPanel.style.display = 'block';
    }
};

window.speakCardSample = function(btn) {
    const container = btn.closest('.sample-card-panel') || btn.closest('.sit-sample-opt-panel') || btn.closest('.sit-sample-box');
    if (!container) return;
    const textEl = container.querySelector('.sample-speech-full');
    if (textEl) {
        speakText(textEl.innerText.trim(), btn);
    }
};

window.copyCardSample = function(btn) {
    const container = btn.closest('.sample-card-panel') || btn.closest('.sit-sample-opt-panel') || btn.closest('.sit-sample-box');
    if (!container) return;
    const textEl = container.querySelector('.sample-speech-full');
    if (textEl) {
        copyText(textEl.innerText.trim());
    }
};

window.toggleTransBox = function(btn) {
    const wrapper = btn.closest('.reason-trans-wrapper') || btn.closest('.sit-sample-trans-wrapper') || btn.parentElement;
    if (!wrapper) return;
    const box = wrapper.querySelector('.reason-trans-box, .sit-sample-trans');
    if (!box) return;
    
    const isHidden = box.classList.contains('hidden');
    if (isHidden) {
        box.classList.remove('hidden');
        btn.classList.add('active');
        const caret = btn.querySelector('.fa-caret-down, .fa-caret-up');
        if (caret) {
            caret.classList.remove('fa-caret-down');
            caret.classList.add('fa-caret-up');
        }
    } else {
        box.classList.add('hidden');
        btn.classList.remove('active');
        const caret = btn.querySelector('.fa-caret-down, .fa-caret-up');
        if (caret) {
            caret.classList.remove('fa-caret-up');
            caret.classList.add('fa-caret-down');
        }
    }
};


/**
 * VSTEP SPEAKING PART 02 (B1 LEVEL) - INTERACTIVE ENGINE
 * Natural Spoken Speech Synthesis & Study Tools
 * Created for Ms. Nguyet's Students
 */

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// Khởi tạo và kiểm tra giọng đọc hợp lệ (chuẩn SPEAKING PART 01 - tự huỷ nếu trước đó lưu trúng giọng nam)
let initVoiceURI = null;
try {
    initVoiceURI = localStorage.getItem('vstep_voice_uri') || null;
    if (initVoiceURI) {
        const lower = initVoiceURI.toLowerCase();
        if (['daniel', 'guy', 'alex', 'fred', 'david', 'mark', 'george', 'albert', 'evan', 'nathan', 'oliver', 'tom', 'rishi', 'eddy', 'zarvox'].some(m => lower.includes(m))) {
            initVoiceURI = null;
            localStorage.removeItem('vstep_voice_uri');
        }
    }
} catch (e) {
    initVoiceURI = null;
}

// State
const state = {
    student: {
        name: localStorage.getItem('vstep_sp2_name') || '',
        classCode: localStorage.getItem('vstep_sp2_class') || ''
    },
    isTeacher: false,
    unlockedGroups: [], // Danh sách ID nhóm tình huống đã mở khóa
    lockedPractice: false, // Bật khi mở khóa quyền CB213 (khóa bài thực hành)
    currentUnlockRole: '', // 'CB210', 'CB211', 'CB213', 'ONB103', 'GV'
    audioEnabled: true,
    selectedVoiceURI: initVoiceURI,
    theme: localStorage.getItem('vstep_theme') || 'light',
    activeTab: 'overview',
    flashcards: [],
    currentCardIdx: 0,
    timer: {
        interval: null,
        phase: 'idle', // 'idle', 'prep', 'speak', 'finished'
        timeLeft: 60,
        totalTime: 60,
        isPaused: false
    },
    completedSituations: [],
    mockTestsCompleted: 0,
    flashcardsReviewed: 0,
    reviewedCardsSet: new Set(),
    builderSpeechesCreated: 0,
    lastSavedTime: null,
    activeExamSituationId: null
};

// ========================================================
// LEARNING PROGRESS & STUDY TRACKING SYSTEM (SPEAKING PART 02)
// ========================================================
const PROGRESS_KEY = 'vstep_sp2_learning_progress';

function saveLearningProgress(silent = true) {
    try {
        const curTab = document.querySelector('.nav-item.active')?.getAttribute('data-target') || state.activeTab || 'overview';
        const data = {
            version: 1,
            studentName: state.student.name || 'Khách',
            studentClass: state.student.classCode || '',
            currentTab: curTab,
            completedSituations: state.completedSituations || [],
            mockTestsCompleted: state.mockTestsCompleted || 0,
            flashcardsReviewed: state.flashcardsReviewed || (state.reviewedCardsSet ? state.reviewedCardsSet.size : 0),
            builderSpeechesCreated: state.builderSpeechesCreated || 0,
            theme: state.theme || 'light',
            lastSavedTime: new Date().toISOString()
        };
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
        state.lastSavedTime = data.lastSavedTime;
        updateProgressUI();
        if (!silent) {
            showToast('💾 Tiến độ học tập đã được lưu thành công!');
        }
    } catch (e) {
        console.error('saveLearningProgress error:', e);
    }
}

function loadLearningProgress() {
    try {
        const raw = localStorage.getItem(PROGRESS_KEY);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
}

window.saveLearningProgress = saveLearningProgress;
window.loadLearningProgress = loadLearningProgress;

window.openProgressModal = () => {
    const modal = document.getElementById('progress-modal');
    if (!modal) return;
    updateProgressUI();
    modal.style.display = 'flex';
};

window.closeProgressModal = () => {
    const modal = document.getElementById('progress-modal');
    if (modal) modal.style.display = 'none';
};

window.clearLearningProgressConfirm = () => {
    if (confirm('⚠️ Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ học tập không?')) {
        localStorage.removeItem(PROGRESS_KEY);
        state.completedSituations = [];
        state.mockTestsCompleted = 0;
        state.flashcardsReviewed = 0;
        if (state.reviewedCardsSet) state.reviewedCardsSet.clear();
        state.builderSpeechesCreated = 0;
        state.lastSavedTime = null;
        alert('🗑 Đã đặt lại toàn bộ tiến độ!');
        window.location.reload();
    }
};

function updateProgressUI() {
    const saved = loadLearningProgress();
    const sitCount = (state.completedSituations || []).length;
    const mockCount = state.mockTestsCompleted || (saved ? saved.mockTestsCompleted : 0) || 0;
    const fcCount = state.flashcardsReviewed || (saved ? saved.flashcardsReviewed : 0) || 0;
    const bCount = state.builderSpeechesCreated || (saved ? saved.builderSpeechesCreated : 0) || 0;

    // Sidebar badge
    const sideSummary = document.getElementById('sidebar-progress-text');
    if (sideSummary) sideSummary.textContent = `${sitCount} / 109 đề`;

    const sideBadge = document.getElementById('sidebar-progress-badge');
    if (sideBadge) {
        if (state.student.name && state.student.name !== 'Khách') {
            sideBadge.classList.remove('hidden');
        } else {
            sideBadge.classList.add('hidden');
        }
    }

    // Modal elements
    const studentEl = document.getElementById('progress-modal-student');
    if (studentEl) studentEl.textContent = `Học viên: ${state.student.name || (saved && saved.studentName) || 'Khách'}`;

    const classEl = document.getElementById('progress-modal-class');
    if (classEl) classEl.textContent = `Lớp: ${state.student.classCode || (saved && saved.studentClass) || 'Chưa cập nhật'}`;

    const sitEl = document.getElementById('progress-modal-situations-count');
    if (sitEl) sitEl.textContent = `${sitCount} / 109`;

    const mockEl = document.getElementById('progress-modal-mock-count');
    if (mockEl) mockEl.textContent = String(mockCount);

    const fcEl = document.getElementById('progress-modal-flashcards-count');
    if (fcEl) fcEl.textContent = `${fcCount} / 25`;

    const builderEl = document.getElementById('progress-modal-builder-count');
    if (builderEl) builderEl.textContent = String(bCount);

    const timeEl = document.getElementById('progress-modal-last-saved');
    if (timeEl) {
        const lastTime = state.lastSavedTime || (saved && saved.lastSavedTime);
        if (lastTime) {
            const t = new Date(lastTime);
            timeEl.innerHTML = `<i class="fa-regular fa-clock"></i> Lần lưu gần nhất: ${t.toLocaleTimeString('vi-VN')} ${t.toLocaleDateString('vi-VN')}`;
        } else {
            timeEl.innerHTML = `<i class="fa-regular fa-clock"></i> Lần lưu gần nhất: Chưa lưu`;
        }
    }
}

function checkSavedSessionOnStart() {
    const saved = loadLearningProgress();
    if (!saved || !saved.studentName || saved.studentName === 'Khách') return;

    const box = document.getElementById('saved-session-box');
    const infoEl = document.getElementById('saved-session-info');
    const detailsEl = document.getElementById('saved-session-details');
    const nameInput = document.getElementById('student-name');
    const classInput = document.getElementById('student-class');

    if (box && infoEl && detailsEl) {
        infoEl.textContent = `${saved.studentName} - Lớp ${saved.studentClass || 'N/A'}`;
        const sitCount = (saved.completedSituations || []).length;
        const mockCount = saved.mockTestsCompleted || 0;
        const fcCount = saved.flashcardsReviewed || 0;
        detailsEl.textContent = `Đã hoàn thành ${sitCount} / 109 đề • ${mockCount} đề thi thử • ${fcCount} thẻ từ vựng`;
        box.style.display = 'block';

        if (nameInput && !nameInput.value) nameInput.value = saved.studentName;
        if (classInput && !classInput.value) classInput.value = saved.studentClass || '';
    }
}

window.resumeSavedSession = () => {
    const saved = loadLearningProgress();
    if (!saved || !saved.studentName) return;
    const nameInput = document.getElementById('student-name');
    const classInput = document.getElementById('student-class');
    if (nameInput) nameInput.value = saved.studentName || '';
    if (classInput) classInput.value = saved.studentClass || '';
    const startBtn = document.getElementById('start-btn');
    if (startBtn) startBtn.click();
};

function initSituationTracking() {
    const cards = document.querySelectorAll('.practice-situation-card');
    cards.forEach((card, idx) => {
        const parentPane = card.closest('.tab-pane');
        const paneId = parentPane ? parentPane.id : 'sit';
        const badge = card.querySelector('.sit-badge-num');
        const badgeText = badge ? badge.textContent.trim().replace(/\s+/g, '') : `CARD${idx + 1}`;
        const sitId = `${paneId}_${badgeText}`;
        card.setAttribute('data-sit-id', sitId);

        const actions = card.querySelector('.sit-card-actions');
        if (actions && !actions.querySelector('.btn-complete-toggle')) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'sit-action-btn btn-complete-toggle';
            btn.title = 'Đánh dấu đã hoàn thành đề này';
            btn.innerHTML = '<i class="fa-regular fa-circle-check"></i> Đánh dấu đã học';
            btn.onclick = function(e) {
                e.stopPropagation();
                toggleSituationCompleted(card, sitId, btn);
            };
            actions.appendChild(btn);
        }
    });

    applyCompletedSituationsUI();
}

window.toggleSituationCompleted = function(card, sitId, btn) {
    if (!card) return;
    if (!sitId) sitId = card.getAttribute('data-sit-id');
    if (!btn) btn = card.querySelector('.btn-complete-toggle');

    if (!Array.isArray(state.completedSituations)) {
        state.completedSituations = [];
    }

    const idx = state.completedSituations.indexOf(sitId);
    const badgeText = card.querySelector('.sit-badge-num')?.textContent.trim() || 'Tình huống';

    if (idx >= 0) {
        state.completedSituations.splice(idx, 1);
        if (btn) {
            btn.classList.remove('completed');
            btn.innerHTML = '<i class="fa-regular fa-circle-check"></i> Đánh dấu đã học';
        }
        card.classList.remove('sit-completed-card');
        showToast(`↩️ Đã bỏ đánh dấu hoàn thành ${badgeText}`);
    } else {
        state.completedSituations.push(sitId);
        if (btn) {
            btn.classList.add('completed');
            btn.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #10b981;"></i> Đã học xong';
        }
        card.classList.add('sit-completed-card');
        showToast(`✅ Đã đánh dấu hoàn thành ${badgeText}!`);
    }

    saveLearningProgress(true);
    updateProgressUI();
};

function applyCompletedSituationsUI() {
    const completedSet = new Set(state.completedSituations || []);
    const cards = document.querySelectorAll('.practice-situation-card');
    cards.forEach(card => {
        const sitId = card.getAttribute('data-sit-id');
        const btn = card.querySelector('.btn-complete-toggle');
        if (completedSet.has(sitId)) {
            card.classList.add('sit-completed-card');
            if (btn) {
                btn.classList.add('completed');
                btn.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #10b981;"></i> Đã học xong';
            }
        } else {
            card.classList.remove('sit-completed-card');
            if (btn) {
                btn.classList.remove('completed');
                btn.innerHTML = '<i class="fa-regular fa-circle-check"></i> Đánh dấu đã học';
            }
        }
    });
}

function initApp() {
    initAuth();
    initTheme();
    initNavigation();
    if (window.groupLockManager) window.groupLockManager.init();
    initSpeechSynthesis();
    initAnswerBuilder();
    initExamTimerAndRecorder();
    initFlashcards();
    initSituationTracking();
    updateProgressUI();

    const sampleFullBtn = document.getElementById('play-full-sample-btn');
    if (sampleFullBtn) {
        sampleFullBtn.addEventListener('click', () => {
            const fullText = "Well, if we had to choose an activity for our family upcoming day off, we would definitely go for going to the countryside. First of all, going to the countryside is a meaningful activity because it allows our family to enjoy the fresh air, escape the busy city, and relax together in nature. Secondly, it’s a wonderful way for all family members to spend quality time together and strengthen our family bond. We would not choose going to the cinema because it’s quite passive and we cannot talk freely inside the theater. As for going shopping, it’s less suitable because shopping centers are usually crowded and expensive. In short, we strongly believe that going to the countryside is the best choice for our family.";
            speakText(fullText);
        });
    }

}

/* ==========================================================================
   1. AUTH & WELCOME MODAL & GOOGLE FORMS ATTENDANCE TRACKING
   ========================================================================== */
function initAuth() {
    const welcomeModal = document.getElementById('welcome-modal');
    const startBtn = document.getElementById('start-btn');
    const nameInput = document.getElementById('student-name');
    const classInput = document.getElementById('student-class');
    const errorMsg = document.getElementById('login-error');
    const userProfile = document.getElementById('user-profile');
    const displayName = document.getElementById('display-name');
    const trackingForm = document.getElementById('tracking-form');
    const entryInput = document.getElementById('entry_388968236');

    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqT7y3ZgUdI0cH7oHxDRRhBir0WNpqHFf4zzSGB2g4ASdmsA/formResponse";
    const ENTRY_FIELD = "entry.388968236";

    const validStudentsCB210 = [
        "Nguyễn Võ Thành Đạt", "Lê Huỳnh Thanh Duy", "Nguyễn Cao Kỳ Duyên", "Đào Ngọc Hân", 
        "Trần Văn Hữu", "Trần Văn Kim Khoa", "Nguyễn Thanh Nâng", "Huỳnh Kỳ Nguyên", 
        "Võ Thị Kim Nguyên", "Võ Hùng Sanh", "Trần Thị Thanh Thảo", "Đặng Thị Kim Thoa", 
        "Trần Thị Tiên Tiên", "Lê Kim Tuyền"
    ];

    const validStudentsCB211 = [
        "Hồ Anh Quân", "Lê Thành Nghiệp", "Lê Khánh Lâm", "Huỳnh Thị Ngọc Thắm", 
        "Mai Trần Xuân Mai", "Lê Thị Uyển Nhi", "Nguyễn Thụy Thanh Trúc"
    ];

    const validStudentsCB213 = [
        "Nguyễn Quốc Anh", "Hoàng Hợp Minh Châu", "Đặng Châu Gia Huy", "Trần Minh Tuệ Mẩn", 
        "Đặng Thị Trúc Măng", "Trương Thị Kha My", "Ngô Diễm My", "Chiêm Chúc Ngân", 
        "Huỳnh Thị Yến Nhi", "Phạm Nguyễn Tâm Như", "Phạm Nhựt Tiến", "Lê Thị Tú Trinh", 
        "Trần Ngọc Vinh"
    ];

    const validStudentsCB219 = [
        "Lưu Thị Vân Anh",
        "Nguyễn Tuấn Anh",
        "Trần Thị Huỳnh Duy",
        "Duy Thị Quỳnh Hân",
        "Trần Thị Xuân Hoa",
        "Nguyễn Phạm Khang",
        "Đặng Văn Khánh",
        "Chim Nhật Luân",
        "Lư Vĩnh Phúc",
        "Nguyễn Chí Thiện",
        "Trần Thị Ngọc Thơ",
        "Huỳnh Yến Trang",
        "Thị Thu Trinh",
        "Nguyễn Thị Mỹ Xuyên",
        "Nguyễn Như Ý"
    ];

    const validStudentsONB103 = [
        "Nguyễn Thị Duy", "Phạm Trần Mỹ Hân", "Trịnh Thị Thu Hiền", "Nguyễn Hoàng Kha",
        "Phạm Thị Út Lua", "Lê Huỳnh Diễm My", "Nguyễn Thị Ngọc Mỹ", "Huỳnh Thị Kim Ngân",
        "Trần Thị Kim Ngân", "Nguyễn Thị Tiểu Phụng", "Trần Yến Phụng", "Phạm Ngọc Thạch",
        "Cao Thị Thu Trang", "Nguyễn Thị Thanh Tuyền", "Trần Phạm Phương Uyên", "Trần Ngô Mỹ Vy"
    ];

    const CLASS_ROSTERS = {
        'CB210': validStudentsCB210,
        'CB211': validStudentsCB211,
        'CB213': validStudentsCB213,
        'CB219': validStudentsCB219,
        'ONB103': validStudentsONB103
    };

    const normalizeStr = (str) => {
        return (str || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[đĐ]/g, 'd')
            .toLowerCase()
            .replace(/\s+/g, ' ')
            .trim();
    };

    // Luôn luôn hiển thị modal đăng nhập mỗi khi tải lại trang / refresh
    state.student.name = '';
    state.student.classCode = '';
    if (welcomeModal) {
        welcomeModal.classList.remove('hidden');
        welcomeModal.style.display = 'flex';
        welcomeModal.style.opacity = '1';
    }
    if (userProfile) {
        userProfile.classList.add('hidden');
    }
    if (nameInput) nameInput.value = '';
    if (classInput) classInput.value = '';
    if (errorMsg) errorMsg.style.display = 'none';

    checkSavedSessionOnStart();

    let isSubmitting = false;

    window.finishLogin = (finalName, finalClass) => {
        finalName = finalName || state.student.name || 'Học viên';
        finalClass = finalClass || state.student.classCode || 'CB210';

        state.student.name = finalName;
        state.student.classCode = finalClass;

        if (displayName) displayName.textContent = `${finalName} (${finalClass})`;
        if (userProfile) userProfile.classList.remove('hidden');

        // Restore learning progress if previously saved for this student
        const saved = loadLearningProgress();
        if (saved && (saved.studentName === finalName || !saved.studentName || saved.studentName === 'Khách')) {
            state.completedSituations = saved.completedSituations || [];
            state.mockTestsCompleted = saved.mockTestsCompleted || 0;
            state.flashcardsReviewed = saved.flashcardsReviewed || 0;
            state.builderSpeechesCreated = saved.builderSpeechesCreated || 0;
            state.lastSavedTime = saved.lastSavedTime || null;
            applyCompletedSituationsUI();
        }
        updateProgressUI();
        saveLearningProgress(true);

        if (state.isTeacher && window.groupLockManager) {
            window.groupLockManager.unlockAllForTeacher();
        } else if (finalClass === 'CB210' && window.groupLockManager) {
            state.currentUnlockRole = 'CB210';
            window.groupLockManager.unlockForClass('CB210', 5);
            window.groupLockManager.applyPracticeLockForCB210();
        } else if (finalClass === 'CB211' && window.groupLockManager) {
            state.currentUnlockRole = 'CB211';
            window.groupLockManager.unlockForClass('CB211', 4);
            window.groupLockManager.applyPracticeLockForCB211();
        } else if (finalClass === 'ONB103' && window.groupLockManager) {
            state.currentUnlockRole = 'ONB103';
            window.groupLockManager.unlockForClass('ONB103', 4);
            window.groupLockManager.applyPracticeLockForONB103();
        } else if (finalClass === 'CB213' && window.groupLockManager) {
            state.lockedPractice = false;
            state.currentUnlockRole = 'CB213';
            window.groupLockManager.unlockForClass('CB213', 4);
            window.groupLockManager.applyPracticeLockForCB213();
        }

        if (welcomeModal) {
            welcomeModal.style.opacity = '0';
            welcomeModal.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                welcomeModal.classList.add('hidden');
                welcomeModal.style.display = 'none';
            }, 300);
        }

        if (startBtn) {
            startBtn.disabled = false;
            startBtn.innerHTML = '<span>BẮT ĐẦU HỌC</span> <i class="fa-solid fa-arrow-right"></i>';
        }
        isSubmitting = false;

        showToast(`Chào mừng ${finalName} - Lớp ${finalClass} đến với bài học Speaking Part 02! 🚀`);
    };

    function enterApp() {
        if (isSubmitting) return;

        const nameVal = nameInput ? nameInput.value.trim() : '';
        const classVal = classInput ? classInput.value.trim() : '';

        if (!nameVal || !classVal) {
            if (errorMsg) {
                errorMsg.textContent = 'Vui lòng nhập đầy đủ Họ tên và Lớp học!';
                errorMsg.style.display = 'block';
            }
            if (!nameVal && nameInput) nameInput.focus();
            else if (!classVal && classInput) classInput.focus();
            return;
        }

        const formattedClass = classVal.toUpperCase().replace(/\s+/g, '');
        const normName = normalizeStr(nameVal);

        // 1. Kiểm tra tài khoản Giáo viên (Cô Nguyệt / PTMN / GV)
        const isTeacher = 
            formattedClass === 'GV' || 
            formattedClass === 'GV2026' || 
            formattedClass === '2026' || 
            formattedClass === 'ADMIN' ||
            formattedClass === 'TEACHER' ||
            formattedClass === 'MISSNGUYET2026' ||
            normName.includes('ptmn') || 
            normName.includes('co nguyet') || 
            normName.includes('minh nguyet') || 
            normName.includes('ms nguyet') || 
            normName.includes('pham thi minh nguyet') ||
            normName === 'nguyet' ||
            normName.includes('giao vien');

        let finalName = '';
        let finalClass = '';

        if (isTeacher) {
            finalName = nameVal || 'Cô Nguyệt (PTMN)';
            finalClass = formattedClass || 'GV';
            state.isTeacher = true;
        } else {
            // 2. Học viên: Chỉ chấp nhận các lớp: CB210, CB211, CB213, ONB103, CB219
            const roster = CLASS_ROSTERS[formattedClass];
            if (!roster) {
                if (errorMsg) {
                    errorMsg.textContent = 'Mã lớp không hợp lệ! Web chỉ nhận các lớp CB210, CB211, CB213, ONB103, CB219.';
                    errorMsg.style.display = 'block';
                }
                if (classInput) classInput.focus();
                return;
            }

            const matchedStudent = roster.find(s => normalizeStr(s) === normName);
            if (!matchedStudent) {
                if (errorMsg) {
                    errorMsg.textContent = `Họ và tên không thuộc danh sách lớp ${formattedClass}. Vui lòng kiểm tra lại!`;
                    errorMsg.style.display = 'block';
                }
                if (nameInput) nameInput.focus();
                return;
            }

            finalName = matchedStudent;
            finalClass = formattedClass;
            state.isTeacher = false;
        }

        if (errorMsg) errorMsg.style.display = 'none';
        isSubmitting = true;

        if (startBtn) {
            startBtn.disabled = true;
            startBtn.innerHTML = '<span>Đang vào lớp...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
        }

        state.student.name = finalName;
        state.student.classCode = finalClass;

        const logData = `${finalName} - Lớp: ${finalClass}`;

        // Gửi thông tin về Google Form (dual-channel)
        if (trackingForm && entryInput) {
            entryInput.value = logData;
            window.submitted = true;
            try {
                trackingForm.submit();
            } catch (e) {
                console.warn('Iframe form submit error:', e);
            }
        }

        try {
            const formData = new FormData();
            formData.append(ENTRY_FIELD, logData);
            fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            }).catch(e => console.warn('Fetch tracking warn:', e));
        } catch (e) {
            console.warn('Fetch init warn:', e);
        }

        // Fallback timeout sau 1s
        setTimeout(() => {
            if (welcomeModal && (!welcomeModal.classList.contains('hidden') || welcomeModal.style.display !== 'none')) {
                window.finishLogin(finalName, finalClass);
            }
        }, 1000);
    }

    if (startBtn) {
        startBtn.addEventListener('click', enterApp);
    }

    // Allow user to click their profile in the sidebar to change info or re-login
    if (userProfile) {
        userProfile.style.cursor = 'pointer';
        userProfile.title = 'Nhấp để đổi thông tin học viên';
        userProfile.addEventListener('click', () => {
            if (welcomeModal) {
                welcomeModal.style.display = 'flex';
                welcomeModal.classList.remove('hidden');
                welcomeModal.style.opacity = '1';
                if (startBtn) {
                    startBtn.disabled = false;
                    startBtn.innerHTML = '<span>CẬP NHẬT & VÀO HỌC</span> <i class="fa-solid fa-arrow-right"></i>';
                }
                if (nameInput) nameInput.focus();
            }
        });
    }

    // Enter key support
    if (nameInput) {
        nameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (classInput) classInput.focus();
                else enterApp();
            }
        });
    }
    if (classInput) {
        classInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') enterApp();
        });
    }
}

/* ==========================================================================
   2. GROUP LOCK MANAGER & ACCESS CONTROL
   ========================================================================== */
const SITUATION_GROUPS = [
    { id: 'group-gift', level: 1, name: '1. Chọn Quà Tặng' },
    { id: 'group-activity', level: 2, name: '2. Chọn Hoạt Động' },
    { id: 'group-location', level: 3, name: '3. Chọn Địa Điểm' },
    { id: 'group-transport', level: 4, name: '4. Chọn Phương Tiện' },
    { id: 'group-career', level: 5, name: '5. Chọn Nghề Nghiệp' },
    { id: 'group-factor', level: 6, name: '6. Chọn Yếu Tố' },
    { id: 'group-solution', level: 7, name: '7. Chọn Giải Pháp' },
    { id: 'group-form', level: 8, name: '8. Chọn Hình Thức' },
    { id: 'group-other', level: 9, name: '9. Những Đề Khó Khác' }
];

const TEACHER_CODES = ['GV', 'GV2026', '2026', 'ADMIN', 'TEACHER', 'MISSNGUYET2026'];

window.groupLockManager = {
    pendingTargetId: null,

    isSituationGroup(targetId) {
        return SITUATION_GROUPS.some(g => g.id === targetId);
    },

    getGroupInfo(targetId) {
        return SITUATION_GROUPS.find(g => g.id === targetId) || null;
    },

    isGroupUnlocked(targetId) {
        if (state.isTeacher) return true;
        if (!this.isSituationGroup(targetId)) return true;
        return state.unlockedGroups.includes(targetId);
    },

    promptUnlock(targetId) {
        const group = this.getGroupInfo(targetId);
        if (!group) return;

        this.pendingTargetId = targetId;
        const modal = document.getElementById('group-unlock-modal');
        const titleEl = document.getElementById('unlock-modal-title');
        const inputEl = document.getElementById('unlock-pass-input');
        const errEl = document.getElementById('unlock-error');

        if (titleEl) titleEl.textContent = `MỞ KHÓA ${group.name.toUpperCase()}`;
        if (errEl) {
            errEl.style.display = 'none';
            errEl.textContent = '';
        }
        if (inputEl) {
            // Tự động điền mã lớp đã đăng nhập để học viên thao tác thuận tiện
            inputEl.value = state.student.classCode || '';
        }

        if (modal) {
            modal.classList.remove('hidden');
            modal.style.display = 'flex';
            setTimeout(() => {
                if (inputEl) inputEl.focus();
            }, 100);
        }
    },

    closeModal() {
        const modal = document.getElementById('group-unlock-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none';
        }
        this.pendingTargetId = null;
    },

    submitUnlock() {
        const inputEl = document.getElementById('unlock-pass-input');
        const errEl = document.getElementById('unlock-error');
        if (!inputEl) return;

        const pass = inputEl.value.trim().toUpperCase().replace(/\s+/g, '');
        if (!pass) {
            if (errEl) {
                errEl.textContent = 'Vui lòng nhập mật khẩu (Mã lớp)!';
                errEl.style.display = 'block';
            }
            inputEl.focus();
            return;
        }

        const targetId = this.pendingTargetId;
        const group = this.getGroupInfo(targetId);
        if (!group) {
            this.closeModal();
            return;
        }

        // 1. Kiểm tra tài khoản Giáo viên
        if (TEACHER_CODES.includes(pass)) {
            this.unlockAllForTeacher();
            this.closeModal();
            showToast('🎉 Giáo viên: Đã mở khóa toàn bộ nội dung!', 3500);
            if (window.switchTabDirectly) window.switchTabDirectly(targetId);
            return;
        }

        // 2. Lớp CB219: Chưa mở được
        if (pass === 'CB219') {
            if (errEl) {
                errEl.textContent = '❌ Lớp CB219 chưa được mở khóa nội dung này. Vui lòng liên hệ Giáo viên!';
                errEl.style.display = 'block';
            }
            inputEl.focus();
            return;
        }

        // 3. Lớp CB211: Mở được tới Nhóm 4 (Phương tiện). Các nhóm sau khóa.
        if (pass === 'CB211') {
            if (group.level <= 4) {
                this.unlockForClass('CB211', 4);
                this.applyPracticeLockForCB211();
                this.closeModal();
                showToast(`🎉 Mở khóa thành công ${group.name} cho lớp CB211!`, 3500);
                if (window.switchTabDirectly) window.switchTabDirectly(targetId);
            } else {
                if (errEl) {
                    errEl.textContent = '❌ Lớp CB211 chỉ được mở khóa tới Nhóm 4 (Phương Tiện). Các nhóm sau chưa được mở!';
                    errEl.style.display = 'block';
                }
                inputEl.focus();
            }
            return;
        }

        // 3b. Lớp CB210: Mở được tới Nhóm 5 (Nghề Nghiệp). Các nhóm sau khóa.
        if (pass === 'CB210') {
            if (group.level <= 5) {
                this.unlockForClass('CB210', 5);
                this.applyPracticeLockForCB210();
                this.closeModal();
                showToast(`🎉 Mở khóa thành công ${group.name} cho lớp CB210!`, 3500);
                if (window.switchTabDirectly) window.switchTabDirectly(targetId);
            } else {
                if (errEl) {
                    errEl.textContent = '❌ Lớp CB210 chỉ được mở khóa tới Nhóm 5 (Nghề Nghiệp). Các nhóm sau chưa được mở!';
                    errEl.style.display = 'block';
                }
                inputEl.focus();
            }
            return;
        }

        // 3c. Lớp ONB103: Mở được tới Nhóm 4 (Phương tiện). Các nhóm sau khóa.
        if (pass === 'ONB103') {
            if (group.level <= 4) {
                this.unlockForClass('ONB103', 4);
                this.applyPracticeLockForONB103();
                this.closeModal();
                showToast(`🎉 Mở khóa thành công ${group.name} cho lớp ONB103!`, 3500);
                if (window.switchTabDirectly) window.switchTabDirectly(targetId);
            } else {
                if (errEl) {
                    errEl.textContent = '❌ Lớp ONB103 chỉ được mở khóa tới Nhóm 4 (Phương Tiện). Các nhóm sau chưa được mở!';
                    errEl.style.display = 'block';
                }
                inputEl.focus();
            }
            return;
        }

        // 4. Lớp CB213: Mở được tới Nhóm 4 (Phương tiện), nhưng khóa Thực hành ở Nhóm 4. Nhóm 1-3 mở hết.
        if (pass === 'CB213') {
            if (group.level <= 4) {
                state.lockedPractice = false;
                this.unlockForClass('CB213', 4);
                this.applyPracticeLockForCB213();
                this.closeModal();
                if (targetId === 'group-transport') {
                    showToast(`🎉 Mở khóa Lý thuyết ${group.name} cho lớp CB213 (Phần Thực hành tạm khóa)!`, 3500);
                } else {
                    showToast(`🎉 Mở khóa thành công ${group.name} cho lớp CB213!`, 3500);
                }
                if (window.switchTabDirectly) window.switchTabDirectly(targetId);
            } else {
                if (errEl) {
                    errEl.textContent = '❌ Lớp CB213 chỉ được mở khóa tới Nhóm 4 (Phương Tiện). Các nhóm sau chưa được mở!';
                    errEl.style.display = 'block';
                }
                inputEl.focus();
            }
            return;
        }

        // 5. Mật khẩu không đúng
        if (errEl) {
            errEl.textContent = '❌ Mật khẩu (Mã lớp) không chính xác! Vui lòng kiểm tra lại.';
            errEl.style.display = 'block';
        }
        inputEl.focus();
    },

    unlockAllForTeacher() {
        state.isTeacher = true;
        state.lockedPractice = false;
        state.currentUnlockRole = 'GV';
        state.unlockedGroups = SITUATION_GROUPS.map(g => g.id);
        this.updateSidebarLockUI();
        this.removePracticeLocks();
    },

    unlockForClass(classCode, maxLevel) {
        state.currentUnlockRole = classCode;
        state.unlockedGroups = [];
        SITUATION_GROUPS.forEach(g => {
            if (g.level <= maxLevel) {
                state.unlockedGroups.push(g.id);
            }
        });
        this.updateSidebarLockUI();
    },

    updateSidebarLockUI() {
        document.querySelectorAll('.nav-item').forEach(item => {
            const target = item.dataset.target;
            if (this.isSituationGroup(target)) {
                if (this.isGroupUnlocked(target)) {
                    item.classList.remove('locked-group');
                    item.classList.add('unlocked-group');
                } else {
                    item.classList.add('locked-group');
                    item.classList.remove('unlocked-group');
                }
            }
        });
    },

    applyPracticeLockForCB210() {
        // Cập nhật các nút tab Thực hành cho CB210: Mở Nhóm 1-5 (kể cả car-v-practice)
        document.querySelectorAll('button[onclick*="-practice"]').forEach(btn => {
            const onclickAttr = btn.getAttribute('onclick') || '';
            if (onclickAttr.includes('gift-v-practice') || onclickAttr.includes('act-v-practice') || onclickAttr.includes('loc-v-practice') || onclickAttr.includes('trans-v-practice') || onclickAttr.includes('car-v-practice')) {
                btn.classList.remove('practice-tab-locked-btn');
                const icon = btn.querySelector('.fa-lock');
                if (icon) icon.remove();
            }
        });
    },

    applyPracticeLockForCB211() {
        // Cập nhật các nút tab Thực hành cho CB211: Mở Nhóm 1-4 (kể cả trans-v-practice)
        document.querySelectorAll('button[onclick*="-practice"]').forEach(btn => {
            const onclickAttr = btn.getAttribute('onclick') || '';
            if (onclickAttr.includes('gift-v-practice') || onclickAttr.includes('act-v-practice') || onclickAttr.includes('loc-v-practice') || onclickAttr.includes('trans-v-practice')) {
                btn.classList.remove('practice-tab-locked-btn');
                const icon = btn.querySelector('.fa-lock');
                if (icon) icon.remove();
            }
        });
    },

    applyPracticeLockForONB103() {
        // Cập nhật các nút tab Thực hành cho ONB103: Mở Nhóm 1-4 (kể cả trans-v-practice)
        document.querySelectorAll('button[onclick*="-practice"]').forEach(btn => {
            const onclickAttr = btn.getAttribute('onclick') || '';
            if (onclickAttr.includes('gift-v-practice') || onclickAttr.includes('act-v-practice') || onclickAttr.includes('loc-v-practice') || onclickAttr.includes('trans-v-practice')) {
                btn.classList.remove('practice-tab-locked-btn');
                const icon = btn.querySelector('.fa-lock');
                if (icon) icon.remove();
            }
        });
    },

    applyPracticeLockForCB213() {
        // Cập nhật các nút tab Thực hành cho CB213: Khóa trans-v-practice (Nhóm 4), các nhóm 1-3 mở bình thường
        document.querySelectorAll('button[onclick*="-practice"]').forEach(btn => {
            const onclickAttr = btn.getAttribute('onclick') || '';
            if (onclickAttr.includes('trans-v-practice')) {
                btn.classList.add('practice-tab-locked-btn');
                if (!btn.querySelector('.fa-lock')) {
                    const icon = document.createElement('i');
                    icon.className = 'fa-solid fa-lock';
                    icon.style.marginLeft = '6px';
                    btn.appendChild(icon);
                }
            } else if (onclickAttr.includes('gift-v-practice') || onclickAttr.includes('act-v-practice') || onclickAttr.includes('loc-v-practice')) {
                btn.classList.remove('practice-tab-locked-btn');
                const icon = btn.querySelector('.fa-lock');
                if (icon) icon.remove();
            }
        });
    },

    removePracticeLocks() {
        document.querySelectorAll('.practice-tab-locked-btn').forEach(btn => {
            btn.classList.remove('practice-tab-locked-btn');
            const icon = btn.querySelector('.fa-lock');
            if (icon) icon.remove();
        });
    },

    init() {
        const cancelBtn = document.getElementById('btn-cancel-unlock');
        const submitBtn = document.getElementById('btn-submit-unlock');
        const inputEl = document.getElementById('unlock-pass-input');

        if (cancelBtn) cancelBtn.addEventListener('click', () => this.closeModal());
        if (submitBtn) submitBtn.addEventListener('click', () => this.submitUnlock());
        if (inputEl) {
            inputEl.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') this.submitUnlock();
            });
        }
        
        const currentClass = (state.student && state.student.classCode) || state.currentUnlockRole;
        if (state.isTeacher) {
            this.unlockAllForTeacher();
        } else if (currentClass === 'CB210') {
            this.unlockForClass('CB210', 5);
            this.applyPracticeLockForCB210();
        } else if (currentClass === 'CB211') {
            this.unlockForClass('CB211', 4);
            this.applyPracticeLockForCB211();
        } else if (currentClass === 'ONB103') {
            this.unlockForClass('ONB103', 4);
            this.applyPracticeLockForONB103();
        } else if (currentClass === 'CB213') {
            this.unlockForClass('CB213', 4);
            this.applyPracticeLockForCB213();
        } else {
            this.updateSidebarLockUI();
        }
    }
};

/* ==========================================================================
   3. THEME & NAVIGATION
   ========================================================================== */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (state.theme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        state.theme = isDark ? 'dark' : 'light';
        localStorage.setItem('vstep_theme', state.theme);
        themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
}

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const sidebar = document.getElementById('sidebar');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');
    const topTitle = document.getElementById('top-title');
    const mobileToggle = document.getElementById('mobile-toggle');

    function closeSidebar() {
        if (sidebar) sidebar.classList.remove('open');
        if (sidebarBackdrop) sidebarBackdrop.classList.remove('active');
    }

    function switchTab(targetId) {
        // Kiểm tra bảo vệ mật khẩu nếu là nhóm tình huống chưa mở
        if (window.groupLockManager && !window.groupLockManager.isGroupUnlocked(targetId)) {
            window.groupLockManager.promptUnlock(targetId);
            return;
        }

        switchTabDirectly(targetId);
    }

    function switchTabDirectly(targetId) {
        navItems.forEach(item => {
            if (item.dataset.target === targetId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        tabPanes.forEach(pane => {
            if (pane.id === targetId) {
                pane.classList.add('active');
                pane.classList.remove('hidden');
                pane.style.display = '';
            } else {
                pane.classList.remove('active');
                pane.style.display = '';
            }
        });

        const activeNavItem = document.querySelector(`.nav-item[data-target="${targetId}"]`);
        if (activeNavItem) {
            const spanEl = activeNavItem.querySelector('span');
            if (spanEl) {
                topTitle.textContent = spanEl.textContent.replace('📖 ', '').toUpperCase();
            }
        }

        state.activeTab = targetId;
        if (targetId === 'flower-garden' && window.FlowerGarden) {
            window.FlowerGarden.render();
        }
        saveLearningProgress(true);

        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (window.innerWidth <= 768) {
            closeSidebar();
        }
    }

    window.switchTab = switchTab;
    window.switchTabDirectly = switchTabDirectly;

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.dataset.target;
            if (target) {
                switchTab(target);
                if (window.groupLockManager && window.groupLockManager.isGroupUnlocked(target)) {
                    history.pushState(null, null, `#${target}`);
                }
            }
        });
    });

    if (mobileToggle) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = sidebar.classList.toggle('open');
            if (sidebarBackdrop) {
                if (isOpen) sidebarBackdrop.classList.add('active');
                else sidebarBackdrop.classList.remove('active');
            }
        });
    }

    if (sidebarBackdrop) {
        sidebarBackdrop.addEventListener('click', closeSidebar);
    }

    // Tap outside sidebar on mobile to close
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('open')) {
            if (!sidebar.contains(e.target) && !mobileToggle?.contains(e.target)) {
                closeSidebar();
            }
        }
    });

    // Hash check on load
    const currentHash = window.location.hash.replace('#', '');
    if (currentHash && document.getElementById(currentHash)) {
        if (window.groupLockManager && !window.groupLockManager.isGroupUnlocked(currentHash)) {
            switchTabDirectly('overview');
        } else {
            switchTab(currentHash);
        }
    }
}

// Global sub-tab switch
window.switchSubTab = function(btn, subTabId) {
    const parentContainer = btn.closest('.tab-pane');
    if (!parentContainer) return;
    
    // Kiểm tra nếu là tab THỰC HÀNH
    const isPracticeTab = subTabId.includes('-practice') || (btn.textContent && btn.textContent.includes('THỰC HÀNH'));

    // 1b. Kiểm tra quyền CB213: Mở Thực hành Nhóm 1-3, Khóa Thực hành Nhóm 4 (Chọn Phương Tiện)
    const isGroup4PracticeLockedClass = (state.student && state.student.classCode === 'CB213') || 
                                       (state.currentUnlockRole === 'CB213');
    if (isPracticeTab && isGroup4PracticeLockedClass && !state.isTeacher) {
        const isAllowedPractice = subTabId === 'gift-v-practice' || subTabId === 'act-v-practice' || subTabId === 'loc-v-practice' ||
                                  subTabId.includes('gift-') || subTabId.includes('act-') || subTabId.includes('loc-') ||
                                  (parentContainer && (parentContainer.id === 'group-gift' || parentContainer.id === 'group-activity' || parentContainer.id === 'group-location'));
        if (!isAllowedPractice) {
            const currentRole = state.currentUnlockRole || (state.student && state.student.classCode) || 'CB213';
            showToast(`🔒 Phần Tình huống Thực hành Nhóm 4 tạm thời bị khóa đối với lớp ${currentRole}. Vui lòng liên hệ Giáo viên!`, 4000);
            return;
        }
    }

    const allBtns = parentContainer.querySelectorAll('.cat-subtab-btn, .clean-subtab-btn, button[onclick*="switchSubTab"]');
    const allPanels = parentContainer.querySelectorAll('.sub-tab-panel');

    allBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    allPanels.forEach(panel => {
        if (panel.id === subTabId) {
            panel.classList.remove('hidden');
            panel.style.display = 'block';
        } else {
            panel.classList.add('hidden');
            panel.style.display = 'none';
        }
    });
};

/* ==========================================================================
   3. NATURAL SPOKEN SPEECH ENGINE
   Warm, relaxed, natural pacing (0.92x) with conversational prosody & pauses
   ========================================================================== */
let availableVoices = [];

// ==========================================================================
// NATURAL FEMALE SPEECH ENGINE (CHẨN 100% SPEAKING PART 01)
// Samantha / Ava / Google US Female, Pitch 1.15, Rate 0.98
// ==========================================================================
var activeHumanAudioPlayer = null;
var activeUtterance = null;
var audioQueue = [];
var currentQueueIndex = 0;
var isPlayingQueue = false;
window._currentAudio = null;

function stopAllAudio() {
    if (window._currentAudio) {
        try {
            window._currentAudio.pause();
            window._currentAudio.currentTime = 0;
        } catch(e) {}
        window._currentAudio = null;
    }
    if (activeHumanAudioPlayer) {
        try {
            activeHumanAudioPlayer.pause();
            activeHumanAudioPlayer.currentTime = 0;
        } catch(e) {}
        activeHumanAudioPlayer = null;
    }
    if (window._speechKeepAlive) {
        clearInterval(window._speechKeepAlive);
        window._speechKeepAlive = null;
    }
    audioQueue = [];
    currentQueueIndex = 0;
    isPlayingQueue = false;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    activeUtterance = null;
    document.querySelectorAll('.btn-speaking-active').forEach(b => b.classList.remove('btn-speaking-active'));
}

/**
 * Kiểm tra và lọc bỏ hoàn toàn các giọng nam hoặc giọng robot kỳ quặc (chuẩn SPEAKING PART 01)
 */
const isMaleOrUnwantedVoice = (voice) => {
    if (!voice) return false;
    const name = ((voice.name || '') + ' ' + (voice.voiceURI || '')).toLowerCase();
    const blacklist = [
        'guy', 'male', 'david', 'mark', 'george', 'alex', 'fred', 'daniel', 'albert',
        'evan', 'nathan', 'oliver', 'tom', 'rishi', 'eddy', 'grandpa', 'jester', 'junior',
        'ralph', 'reed', 'rocko', 'zarvox', 'wobble', 'bad news', 'bahh', 'bells',
        'boing', 'bubbles', 'cellos', 'organ', 'superstar', 'whisper', 'trinoids',
        'alva', 'diego', 'jorge', 'juan', 'carlos'
    ];
    return blacklist.some(term => name.includes(term));
};

/**
 * Thuật toán ưu tiên GIỌNG NỮ trong trẻo, tự nhiên, dễ nghe nhất (chuẩn SPEAKING PART 01)
 * Ưu tiên: Ava, Jenny, Aria, Samantha, Google US English Female
 */
function getBestNaturalVoice(voices) {
    if (!voices || voices.length === 0) return null;
    const enVoices = voices.filter(v => v.lang && (v.lang.toLowerCase().startsWith('en') || v.lang.toLowerCase().startsWith('us')));
    if (enVoices.length === 0) return null;

    // Ưu tiên hoàn toàn các giọng Nữ
    const femaleOnlyVoices = enVoices.filter(v => !isMaleOrUnwantedVoice(v));
    const candidateList = femaleOnlyVoices.length > 0 ? femaleOnlyVoices : enVoices;

    // Thứ tự ưu tiên chất lượng cao (Giọng Nữ Studio / Neural / Tự nhiên / Dễ nghe)
    const femalePriorityKeywords = [
        'ava online (natural)',
        'microsoft ava',
        'ava (premium)',
        'ava (enhanced)',
        'ava',
        'jenny online (natural)',
        'microsoft jenny',
        'jenny',
        'aria online (natural)',
        'microsoft aria',
        'aria',
        'samantha (premium)',
        'samantha (enhanced)',
        'samantha',
        'google us english female',
        'google us english',
        'google uk english female',
        'allison',
        'karen',
        'victoria',
        'kathy',
        'sandy',
        'shelley',
        'serena',
        'zoe',
        'zira'
    ];

    for (const kw of femalePriorityKeywords) {
        const found = candidateList.find(v => {
            const fullName = ((v.name || '') + ' ' + (v.voiceURI || '')).toLowerCase();
            return fullName.includes(kw);
        });
        if (found) return found;
    }

    // Nếu không trúng tên ưu tiên, tìm bất kỳ giọng nào có chữ 'female'
    const anyFemale = candidateList.find(v => {
        const fullName = ((v.name || '') + ' ' + (v.voiceURI || '')).toLowerCase();
        return fullName.includes('female');
    });
    if (anyFemale) return anyFemale;

    // Ưu tiên giọng en-US trong candidateList
    const usVoice = candidateList.find(v => v.lang && (v.lang === 'en-US' || v.lang === 'en_US'));
    if (usVoice) return usVoice;

    return candidateList[0];
}

/**
 * Quản lý và làm mới danh sách giọng đọc Nữ vào Modal (chuẩn SPEAKING PART 01)
 */
function populateVoices() {
    if (!('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices() || [];
    const enVoices = voices.filter(v => v.lang && (v.lang.toLowerCase().startsWith('en') || v.lang.toLowerCase().startsWith('us')));

    if (enVoices.length === 0) return;

    // Nếu URI đã lưu là giọng nam -> tự động huỷ bỏ để dùng giọng nữ chuẩn Part 1
    if (state.selectedVoiceURI) {
        const savedVoice = voices.find(v => v.voiceURI === state.selectedVoiceURI);
        if (savedVoice && isMaleOrUnwantedVoice(savedVoice)) {
            state.selectedVoiceURI = null;
            try { localStorage.removeItem('vstep_voice_uri'); } catch(e) {}
        }
    }

    const defaultVoice = getBestNaturalVoice(voices);
    if (!state.selectedVoiceURI && defaultVoice) {
        state.selectedVoiceURI = defaultVoice.voiceURI;
        try { localStorage.setItem('vstep_voice_uri', defaultVoice.voiceURI); } catch(e) {}
    }

    // Chỉ hiển thị các giọng Nữ trong Modal
    const femaleOnly = enVoices.filter(v => !isMaleOrUnwantedVoice(v));
    const displayList = femaleOnly.length > 0 ? femaleOnly : enVoices;

    const modalSelect = document.getElementById('voice-select-modal');
    if (modalSelect) {
        const curVal = state.selectedVoiceURI || modalSelect.value;
        modalSelect.innerHTML = '';

        // Tùy chọn Mặc định tự động chuẩn Part 1
        const autoOpt = document.createElement('option');
        autoOpt.value = defaultVoice ? defaultVoice.voiceURI : '';
        autoOpt.textContent = `⭐ Giọng Nữ Tự Nhiên Nhất (${defaultVoice ? defaultVoice.name : 'Khuyên dùng: Samantha / Ava / Google US'})`;
        modalSelect.appendChild(autoOpt);

        displayList.forEach(v => {
            const opt = document.createElement('option');
            opt.value = v.voiceURI;
            let cleanName = v.name
                .replace('Microsoft ', '')
                .replace('Online (Natural) - English (United States)', 'US Natural (Ava/Jenny)')
                .replace(' - English (United States)', ' US')
                .replace(' - English (United Kingdom)', ' UK');
            opt.textContent = `👩 ${cleanName} (${v.lang})`;
            modalSelect.appendChild(opt);
        });

        if (curVal && voices.some(v => v.voiceURI === curVal)) {
            modalSelect.value = curVal;
        } else if (defaultVoice) {
            modalSelect.value = defaultVoice.voiceURI;
        }
    }

    const activeVoice = voices.find(v => v.voiceURI === state.selectedVoiceURI) || defaultVoice;
    if (activeVoice) {
        const activeNameSpan = document.getElementById('voice-modal-active-name');
        if (activeNameSpan) {
            activeNameSpan.textContent = activeVoice.name;
        }
    }
}

window.openVoiceModal = () => {
    const modal = document.getElementById('voice-modal');
    if (modal) {
        populateVoices();
        const savedSpeed = localStorage.getItem('vstep_voice_speed') || '0.98';
        const speedSelect = document.getElementById('voice-speed-modal');
        if (speedSelect) speedSelect.value = savedSpeed;
        modal.style.display = 'flex';
    }
};

window.closeVoiceModal = () => {
    const modal = document.getElementById('voice-modal');
    if (modal) modal.style.display = 'none';
};

window.previewVoice = (voiceURI) => {
    const sampleSentence = "Sure. If I had to choose, I would definitely go for going to the countryside because it allows our family to enjoy the fresh air and relax together.";
    if (voiceURI) {
        state.selectedVoiceURI = voiceURI;
        speakClassicTTS(sampleSentence);
    } else {
        window.speakText(sampleSentence);
    }
};

window.saveVoiceSettings = () => {
    const modalSelect = document.getElementById('voice-select-modal');
    const speedSelect = document.getElementById('voice-speed-modal');
    if (modalSelect && modalSelect.value) {
        state.selectedVoiceURI = modalSelect.value;
        try { localStorage.setItem('vstep_voice_uri', modalSelect.value); } catch(e) {}
    }
    if (speedSelect && speedSelect.value) {
        try { localStorage.setItem('vstep_voice_speed', speedSelect.value); } catch(e) {}
    }
    closeVoiceModal();
    if (typeof showToast === 'function') {
        showToast('🎙️ Đã lưu cài đặt Giọng Nữ thành công!');
    }
    window.previewVoice(state.selectedVoiceURI);
};

function initSpeechSynthesis() {
    const audioToggle = document.getElementById('audio-toggle');

    if ('speechSynthesis' in window) {
        populateVoices();
        window.speechSynthesis.onvoiceschanged = () => populateVoices();
        
        // Touch handler for mobile Safari / Chrome audio unlock
        window.addEventListener('touchstart', () => {
            if (window.speechSynthesis && (!availableVoices || availableVoices.length === 0)) {
                window.speechSynthesis.getVoices();
                populateVoices();
            }
        }, { once: true });
    }

    if (audioToggle) {
        audioToggle.addEventListener('click', () => {
            state.audioEnabled = !state.audioEnabled;
            audioToggle.classList.toggle('active', state.audioEnabled);
            if (!state.audioEnabled) {
                stopAllAudio();
            }
            showToast(state.audioEnabled ? 'Đã bật âm thanh giọng mẫu' : 'Đã tắt âm thanh');
        });
    }
}

/**
 * Clean spoken text helper
 */
function cleanSpokenText(raw) {
    let text = raw
        .replace(/<[^>]+>/g, '')
        .replace(/love\(s\)/gi, 'loves')
        .replace(/need\(s\)/gi, 'need')
        .replace(/care\(s\)/gi, 'care')
        .replace(/start\(s\)/gi, 'starts')
        .replace(/enjoy\(s\)/gi, 'enjoys')
        .replace(/don[’']t \/ doesn[’']t like/gi, "doesn't like")
        .replace(/don[’']t \/ doesn[’']t/gi, "don't")
        .replace(/have \/ has/gi, 'has')
        .replace(/has \/ have/gi, 'has')
        .replace(/\[tính từ sở hữu của người tặng\]/gi, 'our')
        .replace(/\[tính từ sở hữu của người nhận\]/gi, 'his')
        .replace(/\[tính từ sở hữu\]/gi, 'our')
        .replace(/\[người nhận\s*[-–]\s*chủ từ\]/gi, 'she')
        .replace(/\[người nhận\s*[-–]\s*túc từ\]/gi, 'her')
        .replace(/\[người tặng\s*[-–]\s*chủ từ\]/gi, 'we')
        .replace(/\[người tặng\s*[-–]\s*túc từ\]/gi, 'us')
        .replace(/\[người nhận\]/gi, 'she')
        .replace(/\[người tặng\]/gi, 'we')
        .replace(/\[chủ từ\]/gi, 'I')
        .replace(/\[đối tượng – túc từ\]/gi, 'me')
        .replace(/\[đối tượng – chủ từ\]/gi, 'I')
        .replace(/\[đối tượng\]/gi, 'us')
        .replace(/\[túc từ\]/gi, 'them')
        .replace(/\[tính từ sở hữu\]/gi, 'my')
        .replace(/\[lựa chọn của mình\]/gi, 'this choice')
        .replace(/\[lựa chọn phù hợp\]/gi, 'this option')
        .replace(/\[diễn đạt tình huống\]/gi, 'an activity for this weekend')
        .replace(/\[phương án không chọn 1\]/gi, 'the second option')
        .replace(/\[phương án không chọn 2\]/gi, 'the third option')
        .replace(/\[lợi ích giải trí 1\]/gi, 'relax after hard work')
        .replace(/\[lợi ích giải trí 2\]/gi, 'reduce stress and feel refreshed')
        .replace(/\[lợi ích giáo dục 1\]/gi, 'broaden knowledge')
        .replace(/\[lợi ích giáo dục 2\]/gi, 'learn new things')
        .replace(/\[lợi ích sức khoẻ 1\]/gi, 'stay active and burn calories')
        .replace(/\[lợi ích sức khoẻ 2\]/gi, 'improve physical fitness')
        .replace(/\[lợi ích 1\]/gi, 'carry personal items')
        .replace(/\[lợi ích 2\]/gi, 'keep belongings organized')
        .replace(/\[lợi ích.*?\]/gi, 'relax and feel refreshed')
        .replace(/\[hoạt động liên quan đến món quà\]/gi, 'carrying a handbag')
        .replace(/\[hoạt động – ving\]/gi, 'Traveling')
        .replace(/\[hoạt động – v-ing\]/gi, 'Traveling')
        .replace(/\[hoạt động\]/gi, 'this activity')
        .replace(/\[địa điểm\]/gi, 'this place')
        .replace(/\[giải pháp\]/gi, 'this solution')
        .replace(/\[mục đích – ving\]/gi, 'working and relaxing')
        .replace(/\[mục đích – v-ing\]/gi, 'working and relaxing')
        .replace(/\[mục đích\]/gi, 'solve this issue')
        .replace(/\[sự kiện\]/gi, 'this event')
        .replace(/\[sở thích\]/gi, 'fashion')
        .replace(/\[kể tên.*?\]/gi, 'many traditional specialties')
        .replace(/\[liệt kê.*?\]/gi, 'communication and teamwork skills')
        .replace(/\[.*?\]/g, 'this option')
        .replace(/➔/g, '')
        .replace(/→/g, '')
        .replace(/▪/g, '')
        .replace(/–/g, '-')
        .replace(/["“”]/g, '')
        .trim();

    return text
        .replace(/\bWell\b(?!,)/g, 'Well,')
        .replace(/\bFirstly\b(?!,)/g, 'Firstly,')
        .replace(/\bFirst of all\b(?!,)/g, 'First of all,')
        .replace(/\bSecondly\b(?!,)/g, 'Secondly,')
        .replace(/\bNext\b(?!,)/g, 'Next,')
        .replace(/\bBesides\b(?!,)/g, 'Besides,')
        .replace(/\bMoreover\b(?!,)/g, 'Moreover,')
        .replace(/\bIn short\b(?!,)/g, 'In short,')
        .replace(/\bTo sum up\b(?!,)/g, 'To sum up,')
        .replace(/\bIn conclusion\b(?!,)/g, 'In conclusion,')
        .replace(/\s+/g, ' ')
        .trim();
}
window._activeUtterance = null;
window._speechKeepAlive = null;

/**
 * Classic Speech Engine chuẩn 100% SPEAKING PART 01
 * Pitch 1.15, Rate 0.98, Giọng Nữ ngọt ngào, tươi sáng, phát âm tự nhiên
 */
function speakClassicTTS(cleanTxt, triggerBtn = null) {
    if (!('speechSynthesis' in window)) {
        showToast('Trình duyệt không hỗ trợ phát âm.');
        if (triggerBtn) triggerBtn.classList.remove('btn-speaking-active');
        return;
    }

    try {
        if (window._currentAudio) {
            try {
                window._currentAudio.pause();
                window._currentAudio.currentTime = 0;
            } catch(e) {}
            window._currentAudio = null;
        }
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
        }
        window.speechSynthesis.cancel();

        const utt = new SpeechSynthesisUtterance(cleanTxt);
        window._activeUtterance = utt;
        const voices = window.speechSynthesis.getVoices() || [];

        let bestVoice = null;
        if (state.selectedVoiceURI) {
            bestVoice = voices.find(v => v.voiceURI === state.selectedVoiceURI);
            if (bestVoice && isMaleOrUnwantedVoice(bestVoice)) {
                bestVoice = null;
                state.selectedVoiceURI = null;
                try { localStorage.removeItem('vstep_voice_uri'); } catch(e) {}
            }
        }
        if (!bestVoice) {
            bestVoice = getBestNaturalVoice(voices);
        }

        if (bestVoice) {
            utt.voice = bestVoice;
            utt.lang = bestVoice.lang;
        } else {
            utt.lang = 'en-US';
        }

        const savedSpeed = parseFloat(localStorage.getItem('vstep_voice_speed') || '0.98');
        utt.rate = isNaN(savedSpeed) ? 0.98 : savedSpeed;
        utt.pitch = 1.15; // Giọng nữ trong trẻo, tươi sáng chuẩn SPEAKING PART 01

        if (triggerBtn) {
            triggerBtn.classList.add('btn-speaking-active');
        }

        const cleanup = () => {
            if (window._speechKeepAlive) {
                clearInterval(window._speechKeepAlive);
                window._speechKeepAlive = null;
            }
            window._activeUtterance = null;
            if (triggerBtn) triggerBtn.classList.remove('btn-speaking-active');
            document.querySelectorAll('.btn-speaking-active').forEach(b => b.classList.remove('btn-speaking-active'));
        };

        utt.onend = cleanup;
        utt.onerror = cleanup;

        // Giữ kết nối âm thanh liên tục trên Chrome / Safari khi đọc bài dài
        if (window._speechKeepAlive) clearInterval(window._speechKeepAlive);
        window._speechKeepAlive = setInterval(() => {
            if (!window.speechSynthesis || !window.speechSynthesis.speaking) {
                clearInterval(window._speechKeepAlive);
                window._speechKeepAlive = null;
            } else {
                window.speechSynthesis.pause();
                window.speechSynthesis.resume();
            }
        }, 10000);

        setTimeout(() => {
            window.speechSynthesis.speak(utt);
            if (window.speechSynthesis.paused) window.speechSynthesis.resume();
        }, 10);

    } catch (e) {
        console.error("Speech synthesis exception:", e);
        if (triggerBtn) triggerBtn.classList.remove('btn-speaking-active');
    }
}

window.speakText = function(text, triggerBtn = null) {
    if (!state.audioEnabled) {
        state.audioEnabled = true;
        const audioToggle = document.getElementById('audio-toggle');
        if (audioToggle) audioToggle.classList.add('active');
    }

    stopAllAudio();

    const clean = cleanSpokenText(text);
    if (!clean) return;

    speakClassicTTS(clean, triggerBtn);
};

window.copyText = function(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Đã sao chép vào bộ nhớ tạm! 📋');
    }).catch(() => {
        showToast('Không thể sao chép');
    });
};

function playBeep(freq = 440, duration = 0.15) {
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        if (!window._audioCtx) {
            window._audioCtx = new AudioContextClass();
        }
        if (window._audioCtx.state === 'suspended') {
            window._audioCtx.resume();
        }
        const ctx = window._audioCtx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
    } catch (e) {
        console.log('AudioContext notice:', e);
    }
}

/* ==========================================================================
   4. INTERACTIVE ANSWER BUILDER
   ========================================================================== */
const situationTemplates = {
    gift: {
        intro: "Well, if {SUB_SUBJ} had to choose a gift for {TARGET}, {SUB_SUBJ} would go for {CHOSEN}.",
        r1: "Firstly, it's a suitable gift because {REASON_1}.",
        r2: "Secondly, it's a practical and meaningful present because {REASON_2}.",
        reject1: "{SUB_SUBJ} wouldn't choose {REJ_1} because {REJ_REASON_1}.",
        reject2: "As for {REJ_2}, it's less suitable because {REJ_REASON_2}.",
        concl: "In short, {SUB_SUBJ} believe {CHOSEN} is the best choice for this situation."
    },
    activity: {
        intro: "Well, if {SUB_SUBJ} had to choose an activity to {TARGET}, {SUB_SUBJ} would go for {CHOSEN}.",
        r1: "First of all, {CHOSEN} is a wonderful choice because {REASON_1}.",
        r2: "Secondly, it’s very beneficial because {REASON_2}.",
        reject1: "{SUB_SUBJ} wouldn't recommend {REJ_1} because {REJ_REASON_1}.",
        reject2: "As for {REJ_2}, it's not the ideal choice because {REJ_REASON_2}.",
        concl: "In short, {SUB_SUBJ} believe {CHOSEN} is the most suitable activity."
    },
    location: {
        intro: "Well, if {SUB_SUBJ} had to select a place for {TARGET}, {SUB_SUBJ} would definitely go for {CHOSEN}.",
        r1: "First of all, {CHOSEN} has a convenient location and great atmosphere because {REASON_1}.",
        r2: "Moreover, it offers reasonable costs and facilities because {REASON_2}.",
        reject1: "{SUB_SUBJ} wouldn't choose {REJ_1} because {REJ_REASON_1}.",
        reject2: "As for {REJ_2}, it's less suitable because {REJ_REASON_2}.",
        concl: "To sum up, {CHOSEN} is clearly the best option for everyone."
    },
    transport: {
        intro: "Well, if {SUB_SUBJ} had to choose a means of transport to {TARGET}, {SUB_SUBJ} would go for {CHOSEN}.",
        r1: "Firstly, it's convenient, safe, and flexible because {REASON_1}.",
        r2: "Secondly, it helps {SUB_OBJ} save time and money because {REASON_2}.",
        reject1: "{SUB_SUBJ} wouldn't select {REJ_1} because {REJ_REASON_1}.",
        reject2: "As for {REJ_2}, it's not practical because {REJ_REASON_2}.",
        concl: "In conclusion, {CHOSEN} is the most suitable vehicle for this trip."
    },
    solution: {
        intro: "Well, if {SUB_SUBJ} had to suggest a solution to {TARGET}, {SUB_SUBJ} would strongly recommend {CHOSEN}.",
        r1: "First and foremost, it’s an effective and long-term solution because {REASON_1}.",
        r2: "Furthermore, it’s practical and easy to apply because {REASON_2}.",
        reject1: "{SUB_SUBJ} wouldn't advise choosing {REJ_1} because {REJ_REASON_1}.",
        reject2: "As for {REJ_2}, it's less effective because {REJ_REASON_2}.",
        concl: "In short, {CHOSEN} is the most optimal way to handle this issue."
    },
    job: {
        intro: "Well, if {SUB_SUBJ} had to choose a job for {TARGET}, {SUB_SUBJ} would go for {CHOSEN}.",
        r1: "First of all, it offers great career opportunities and stability because {REASON_1}.",
        r2: "Secondly, it helps develop valuable skills and experience because {REASON_2}.",
        reject1: "{SUB_SUBJ} wouldn't choose {REJ_1} because {REJ_REASON_1}.",
        reject2: "As for {REJ_2}, it's not very suitable because {REJ_REASON_2}.",
        concl: "In short, {SUB_SUBJ} believe {CHOSEN} is the best career path."
    }
};

const samplePresetOptions = {
    gift: {
        target: "our foreign teacher before he leaves Vietnam",
        chosen: "a Vietnamese coffee package",
        r1: "he loves Vietnamese traditional drinks and it represents local culture",
        r2: "it’s compact, easy to carry, and has a very reasonable price",
        rej1: "a lotus picture",
        rejR1: "he cannot use it in daily life and it’s quite fragile to pack",
        rej2: "a hand-made gift",
        rejR2: "we don't have enough time to prepare it properly"
    },
    activity: {
        target: "spend our upcoming weekend together",
        chosen: "going to the countryside",
        r1: "it allows us to enjoy the fresh air and escape the noisy city life",
        r2: "it helps our family spend quality time together and strengthen our bond",
        rej1: "going to the cinema",
        rejR1: "it’s quite passive and we cannot talk to each other inside the theater",
        rej2: "going shopping",
        rejR2: "it’s very crowded and quite expensive for a weekend trip"
    },
    location: {
        target: "organize our class year-end party",
        chosen: "a cozy restaurant in the city center",
        r1: "it has delicious food, spacious seating, and friendly service",
        r2: "it’s located in a convenient area so everyone can easily travel there",
        rej1: "holding the party at home",
        rejR1: "our space is too small and cleaning up afterwards takes a lot of time",
        rej2: "a picnic in the park",
        rejR2: "the weather can be unpredictable and there are not enough facilities"
    },
    transport: {
        target: "travel from Hanoi to Da Nang for our summer vacation",
        chosen: "traveling by plane",
        r1: "it’s very fast and saves a lot of travel time",
        r2: "it’s safe, comfortable, and we can enjoy a relaxing flight",
        rej1: "traveling by motorbike",
        rejR1: "the distance is too long and it’s very dangerous on the highway",
        rej2: "traveling by coach",
        rejR2: "it takes over 15 hours and easily causes travel sickness and fatigue"
    },
    solution: {
        target: "improve English speaking fluency effectively",
        chosen: "joining an English speaking club twice a week",
        r1: "it creates a natural environment to practice speaking with friendly peers",
        r2: "it helps build confidence and overcome the fear of making mistakes",
        rej1: "only studying grammar books at home",
        rejR1: "it focuses too much on theory without real conversation practice",
        rej2: "hiring an expensive private tutor",
        rejR2: "it’s not affordable for students with a limited monthly budget"
    },
    job: {
        target: "my career after university graduation",
        chosen: "working as an English teacher at a language center",
        r1: "it matches my passion for education and helps develop communication skills",
        r2: "it provides a dynamic working environment and good career growth",
        rej1: "doing an office administrative job",
        rejR1: "it’s repetitive, boring, and is not suitable for my active personality",
        rej2: "starting a personal business immediately",
        rejR2: "it’s extremely risky and requires significant capital and experience"
    }
};

function initAnswerBuilder() {
    const groupSelect = document.getElementById('b-group');
    const pronounSelect = document.getElementById('b-pronoun');
    const targetInput = document.getElementById('b-target');
    const chosenInput = document.getElementById('b-chosen');
    const r1Input = document.getElementById('b-r1');
    const r2Input = document.getElementById('b-r2');
    const rej1Input = document.getElementById('b-rej1');
    const rejR1Input = document.getElementById('b-rejr1');
    const rej2Input = document.getElementById('b-rej2');
    const rejR2Input = document.getElementById('b-rejr2');
    const generateBtn = document.getElementById('b-generate-btn');
    const resultBox = document.getElementById('b-result-text');
    const presetBtn = document.getElementById('b-preset-btn');
    const listenBtn = document.getElementById('b-listen-btn');
    const copyBtn = document.getElementById('b-copy-btn');

    if (!groupSelect) return;

    function loadPreset(groupKey) {
        const p = samplePresetOptions[groupKey] || samplePresetOptions.gift;
        targetInput.value = p.target;
        chosenInput.value = p.chosen;
        r1Input.value = p.r1;
        r2Input.value = p.r2;
        rej1Input.value = p.rej1;
        rejR1Input.value = p.rejR1;
        rej2Input.value = p.rej2;
        rejR2Input.value = p.rejR2;
    }

    groupSelect.addEventListener('change', () => {
        loadPreset(groupSelect.value);
    });

    if (presetBtn) {
        presetBtn.addEventListener('click', () => {
            loadPreset(groupSelect.value);
            showToast('Đã nạp dữ liệu mẫu thành công! 📝');
        });
    }

    generateBtn.addEventListener('click', () => {
        const group = groupSelect.value;
        const pronoun = pronounSelect.value;
        const target = targetInput.value.trim() || 'this situation';
        const chosen = chosenInput.value.trim() || 'this option';
        const r1 = r1Input.value.trim() || 'it brings great benefits';
        const r2 = r2Input.value.trim() || 'it’s very practical and convenient';
        const rej1 = rej1Input.value.trim() || 'the second choice';
        const rejR1 = rejR1Input.value.trim() || 'it takes too much time';
        const rej2 = rej2Input.value.trim() || 'the third choice';
        const rejR2 = rejR2Input.value.trim() || 'it’s quite expensive';

        let subSubject = pronoun;
        let subObject = pronoun === 'I' ? 'me' : pronoun === 'we' ? 'us' : pronoun === 'he' ? 'him' : pronoun === 'she' ? 'her' : 'them';
        let subPoss = pronoun === 'I' ? 'my' : pronoun === 'we' ? 'our' : pronoun === 'he' ? 'his' : pronoun === 'she' ? 'her' : 'their';

        const tpl = situationTemplates[group] || situationTemplates.gift;

        let intro = tpl.intro.replace(/{SUB_SUBJ}/g, subSubject).replace(/{TARGET}/g, target).replace(/{CHOSEN}/g, chosen);
        let reason1 = tpl.r1.replace(/{SUB_SUBJ}/g, subSubject).replace(/{SUB_OBJ}/g, subObject).replace(/{CHOSEN}/g, chosen).replace(/{REASON_1}/g, r1);
        let reason2 = tpl.r2.replace(/{SUB_SUBJ}/g, subSubject).replace(/{SUB_OBJ}/g, subObject).replace(/{CHOSEN}/g, chosen).replace(/{REASON_2}/g, r2);
        let reject1 = tpl.reject1.replace(/{SUB_SUBJ}/g, subSubject).replace(/{REJ_1}/g, rej1).replace(/{REJ_REASON_1}/g, rejR1);
        let reject2 = tpl.reject2.replace(/{SUB_SUBJ}/g, subSubject).replace(/{REJ_2}/g, rej2).replace(/{REJ_REASON_2}/g, rejR2);
        let concl = tpl.concl.replace(/{SUB_SUBJ}/g, subSubject).replace(/{CHOSEN}/g, chosen);

        const fullSpeech = `${intro}\n\n${reason1} ${reason2}\n\n${reject1} ${reject2}\n\n${concl}`;
        resultBox.textContent = fullSpeech;
        state.builderSpeechesCreated = (state.builderSpeechesCreated || 0) + 1;
        updateProgressUI();
        saveLearningProgress(true);
        showToast('Đã tạo bài nói hoàn chỉnh! 🎉');
    });

    listenBtn.addEventListener('click', () => {
        const text = resultBox.textContent;
        if (text) {
            speakText(text);
        }
    });

    copyBtn.addEventListener('click', () => {
        const text = resultBox.textContent;
        if (text) {
            copyText(text);
        }
    });

    loadPreset('gift');
}

/* ==========================================================================
   5. VSTEP PRACTICE TIMER (1' Prep + 3' Speak)
   ========================================================================== */

// ==========================================================================
// ALL 109 PRACTICE SITUATIONS POOL
// ==========================================================================
const ALL_SITUATIONS_POOL = [
  "SITUATION 01: Your foreign teacher is going to leave Vietnam. Your class wants to choose a gift for him. There are three options: a lotus picture, a Vietnamese coffee package, and a hand-made gift. Which one is the best choice?",
  "SITUATION 02: Your class wants to choose a gift for your teacher. There are three choices: a handbag, shoes, and glasses. Which one would you choose?",
  "SITUATION 03: Your friend’s birthday is coming up, and you want to buy him a special gift. You have three options to choose from: a watch, a pair of headphones, or a picture frame. Which one would you choose, and why?",
  "SITUATION 04: You want to choose a gift for your colleague who is retiring next week. Three gifts are considered: a handmade gift, a movie ticket, or a book. Which one do you choose?",
  "SITUATION 05: Your friend is going to do military service. You are thinking about a gift for him. There are three options: a game, a book, and a diary. Which one would you choose?",
  "SITUATION 06: Your nephew will visit your hometown. You are going to give him a gift. There are three options: a robot, an English comic book, or a school bag. Which one do you think is the best choice?",
  "SITUATION 07: Your friend had an accident and he has to stay in the hospital for a week. You are thinking about a gift for him. There are three options: flowers, a set of crayons and a drawing book, or some healthy snacks. Which one will you choose?",
  "SITUATION 08: Your cousin has just ranked first in his class. His parents want to give him a special gift. They’re considering three options: buying him a laptop, giving him a trip, or buying him a motorbike. Which one would you suggest?",
  "SITUATION 09: Your nephew has just turned 13, and you want to give him a special gift. You are considering three options: a guitar, an MP3 player, or a set of comic books. Which one would you choose?",
  "SITUATION 10: Your niece is turning twelve years old next week. You are thinking about what to give her. There are three options: a dress, an English book, and a bunch of flowers. Which one is the best choice?",
  "SITUATION 11: Your friend, who is a musician, is having his first song published next month. You want to buy him a gift to celebrate this special occasion. There are three choices: a bouquet of flowers, a handmade card, and a notebook.",
  "SITUATION 12: You are going to choose a birthday gift for your father. There are three choices: a tie, a bottle of champagne, and a puppy. Which one would you choose?",
  "SITUATION 13: Vietnamese Teachers' Day is coming, and your class wants to give your teacher a special gift. You are considering three options: organizing a small party, making a thank-you video, and giving a handmade card. Which is the best choice?",
  "SITUATION 14: You are choosing a gift for your foreign friend to represent Vietnamese culture. You have three options: some lotus flowers, an Ao Dai, or a conical hat. Which one would you choose?",
  "SITUATION 15: Your friend is thinking about a gift to celebrate his parents' 30th wedding anniversary. Three options are: a trip abroad, a couple’s watch, or a family photoshoot. Which one would you recommend him?",
  "SITUATION 16: Your co-worker is going to retire next month. Your team wants to choose a meaningful gift for him. There are three options: a handwritten card, a picture of him with colleagues, and a meal at the best restaurant in your city. Which one do you think is the best choice, and why?",
  "SITUATION 01: You are planning a weekend vacation. There are three options: going to the beach, visiting the mountains, and exploring a city with museums and cafés. Which one is the best choice for you?",
  "SITUATION 02: You have some free time in the evening and want to do something to relax. Three activities are considered: reading a book, watching TV, and going for a walk. Which one would you choose?",
  "SITUATION 03: You are thinking about how to spend your weekend. There are three options: going out with your family, hanging out with friends, and relaxing alone at home. Which one is the best choice?",
  "SITUATION 04: Your friend is coming to visit your house next week. You are thinking of a cosy dinner with your friend. Three options are: cooking at home, ordering food from a restaurant, and eating out at a restaurant. Which option would you choose?",
  "SITUATION 05: You are considering what to do during a 15-minute break. There are three options: reading a book, talking with friends, and doing exercise. Which one is the best choice for you?",
  "SITUATION 06: You have two days off and want to make the most of your time. Three activities are considered: staying at home, traveling abroad, and hiking with your friends. Which one would you choose?",
  "SITUATION 07: Your friend wants to learn a new skill after work, but she doesn't have much free time. She is considering three options: painting, gardening, and knitting. Which one would you recommend to her?",
  "SITUATION 08: Your friend feels very stressed with study and wants to do something. Which one would you recommend to her: taking a sport, learning new soft skills, and doing volunteer work?",
  "SITUATION 09: Your friend wants to do something new to relax. There are three options: making a cake, going to a painting workshop, or learning a new language. Which one do you think is the best choice?",
  "SITUATION 10: Your sister lost her confidence. You are thinking about a way she can gain confidence. There are three choices: joining a summer camp, doing volunteer work, and joining a speaking contest. Which one would you recommend?",
  "SITUATION 11: Your family is discussing where your 7th-grade nephew will spend his summer holiday: joining a camp, doing military training, or staying with his grandparents in the countryside. Which one is the best choice for him?",
  "SITUATION 12: You are going to have three days off. You are planning to do something to relax. There are three options: going to the beach, going hiking, and going to a big city. Which one will you choose?",
  "SITUATION 13: You want to celebrate your birthday in a special way this year. You are considering three options: having a small party at home, going on a short trip with close friends, or spending the day volunteering. Which one would you choose?",
  "SITUATION 14: You and your friends are planning a short holiday in Vietnam. You are considering three options: visiting Can Tho to explore the floating markets, going to Vung Tau for a beach trip, or hiking in Da Lat. Which activity would you choose?",
  "SITUATION 15: You want to invite your friend to go to the cinema with you. There are three types of films you can choose from: an action film, a romantic film, and a comedy film. Which one would you choose, and why?",
  "SITUATION 01: Your English friend is visiting Vietnam on his summer vacation. Three places are considered: a mountainous town, a coastal city, and an ancient town. Which one would you recommend?",
  "SITUATION 02: You are going to have a short trip with your family. You are considering three choices: a water park, a museum, and an eco-tourism site. Which one would you choose?",
  "SITUATION 03: Your class is planning to hold a reunion party. Three places are suggested: a restaurant, a coffee shop, or your teacher’s house. Which one would you choose?",
  "SITUATION 04: Your neighbor wants to spend more quality time with her 11-year-old son. She is considering three places to take him: a park, a science center, or the beach. Which place would you recommend?",
  "SITUATION 05: A foreign friend is going to visit Vietnam in August for 3 days. Three places are suggested: Hanoi, Ho Chi Minh City, or Hue. Which one would you recommend?",
  "SITUATION 06: You are going to take an exam. You are thinking of a place to study for exams. There are three choices: in your bedroom, in the school library, and in the coffee shop. Which one would you choose?",
  "SITUATION 07: Your foreign friend has come to Vietnam. You are thinking of a place to suggest him to travel. Which option is the best choice: Đà Nẵng, Hồ Chí Minh, and Hà Nội?",
  "SITUATION 08: Your class wants to hold a farewell party to say goodbye to your English teacher. Your class is considering where to hold it: in the classroom, in the teacher’s house, and in a restaurant. Which one is the best choice?",
  "SITUATION 09: Your cousin is going to be a freshman at the university. He is thinking about where to live. There are three choices: living in a dormitory, living with his friends, or living with his relatives. Which one is the best choice for him?",
  "SITUATION 10: A student from Đà Nẵng plans to visit Hà Nội this weekend. Three places are suggested for sightseeing: Hồ Chí Minh Mausoleum, Hoàn Kiếm Lake, or Hà Nội Museum. Which place would you recommend?",
  "SITUATION 11: Your company is planning a two-day conference for employees. There are three suggested places: at a hotel, at a conference centre, at your company. Which option do you think is the best choice?",
  "SITUATION 12: You and your friend are choosing a place to eat out together this weekend. There are three options: a Thai restaurant, a Japanese restaurant, and a Chinese restaurant. Which one would you choose?",
  "SITUATION 13: You and your colleagues want to relax after a long working day. There are three options: going to a quiet café, going to a shopping mall, or going to a public park. Which place would you choose?",
  "SITUATION 14: Your friend is planning to study abroad and is choosing between three countries. The options are: Singapore, Australia, and Japan. Which one would you recommend?",
  "SITUATION 15: Your friend is looking for a place to study. There are three options: a quiet bedroom, a living room, and a library. Which one would you recommend, and why?",
  "SITUATION 16: Your company is going to organize a camping trip for all employees. There are three possible locations: a riverbank, a theme park, and a camping site. Which place would you choose, and why?",
  "SITUATION 01: Your workplace is about 10 km from your house. You are considering which means of transport to choose: car, bus, and motorbike. Which one would you choose?",
  "SITUATION 02: A group of students is going to travel from Ho Chi Minh City to Hue. Three means of transport are suggested: by train, by plane, or by coach. Which one will you suggest?",
  "SITUATION 03: Your friend is planning a weekend trip to a nearby beach, about 150 km away. He is considering going by motorbike, by car, or by bus. Which one do you think is the best option?",
  "SITUATION 04: You and your classmates will attend a 3-day camping trip in a remote area. You need to choose among riding bicycles, hiring a coach, or using motorbikes. Which option would you recommend?",
  "SITUATION 05: A tourist wants to explore the city center of Hanoi. The three suggested modes of transport are walking, renting a bicycle, or taking a taxi. Which do you think is the most suitable?",
  "SITUATION 06: Your company is organizing a team-building event in a city 400 km away. You need to decide between traveling by plane, by overnight train, or by company car. Which one would you choose and why?",
  "SITUATION 01: Your friend is looking for a new job. He is considering three options: a graphic designer, an IT support specialist, or a content creator for social media. Which job would you recommend he choose?",
  "SITUATION 02: Your brother is going to graduate from university. He is thinking about finding a job. There are three choices: a teacher, a translator, and a tour guide. Which one would you recommend?",
  "SITUATION 03: Your friend wants to find a part-time job to improve his English. He is considering three options: a job at a restaurant, a job at an English center, and a job at a travel agency. Which one do you think is the best choice?",
  "SITUATION 04: Your friend has just graduated and is looking for a teaching job. There are three options: teaching in a rural school, teaching in a big city school, or teaching in an international school. Which one is most suitable for him?",
  "SITUATION 05: Your cousin is passionate about art and creativity. She is thinking of pursuing a career. Three options are considered: a graphic designer, an interior decorator, and a fashion designer. Which one would you recommend?",
  "SITUATION 06: Your close friend wants to choose a job that offers a good work-life balance. He is considering working in an office, becoming a freelancer, or running a small business. Which option do you think is the most suitable?",
  "SITUATION 07: Your younger sister wants a stable and well-paid job after graduation. She is considering three options: working for the government, working for a foreign company, or starting her own business. Which one would you suggest?",
  "SITUATION 08: Your brother has just graduated, and he is considering what to do after graduation. There are three options: go to work, study for his master’s degree, or take a gap year. Which one would you recommend him?",
  "SITUATION 01: Your younger sister has just finished high school and is planning to study at a university. She wants to choose a university that provides high-quality education. There are three factors she should consider: the university’s ranking, the distance from her home, and the tuition fees. Which one do you think is the best choice for her?",
  "SITUATION 02: Your cousin has just graduated from high school and is going to enter university. He is considering several factors before choosing a school. Three important things to think about are: affordable fees, student support, and campus facilities. Which one do you think is the best choice for him?",
  "SITUATION 03: As an employer, you want to hire a new employee for your company. There are three qualities you should consider: communication skills, honesty, and professional skills. Which one is the most important quality for you?",
  "SITUATION 04: Your brother is starting university next month, and your family is trying to decide which university would be the best fit for him. Three key factors are considered: the university’s ranking, its distance from home, and the course fees. In your opinion, which factor is the most important?",
  "SITUATION 05: Your nephew has just graduated from high school and is going to enter university. He is considering several factors before choosing a school. Three important things to think about are: tuition fees and living costs, facilities such as libraries and labs, or having supportive friends or classmates. Which one is the best choice?",
  "SITUATION 06: Your family wants to buy a new house. There are three factors to consider: its size, its cost, and its location. Which one do you think is the best choice?",
  "SITUATION 07: You are going to graduate from university next month. You are thinking of finding a suitable job for yourself. Three things are considered: salary, location, and job promotion. Which one would you consider when choosing a job?",
  "SITUATION 08: You are planning to change your job. There are three important factors to consider when making your decision: better career prospects, a higher salary, and a more flexible job. Which one would you choose?",
  "SITUATION 09: Your school wants to improve the quality of education. There are three areas it can focus on: teachers, students, or facilities. Which one do you think is the most important?",
  "SITUATION 10: As a company manager seeking to recruit new employees, you must evaluate three factors: honesty, communication skills, and professional skills. In your opinion, which factor is the most important?",
  "SITUATION 01: Your 15-year-old younger brother wants to improve his English communication skills. There are three ways to choose: studying at an English center, talking with foreigners to practice speaking, and joining an English-speaking club. Which one is the best choice?",
  "SITUATION 02: Your friend spends too much time on social media and wants to stop. She is thinking of: deleting the apps, limiting screen time, or doing more outdoor activities. Which one would you suggest?",
  "SITUATION 03: Your younger sister is under pressure because of exams. You are thinking of three solutions: giving her advice, taking her out for a walk, or encouraging her to take a break. Which one would you choose?",
  "SITUATION 04: Your friend is very stressed due to too much schoolwork. She is considering three options: doing exercise, talking to a friend, or taking a rest. Which one would you recommend?",
  "SITUATION 05: Your cousin is bullied at school. There are three solutions: talk to teachers, talk to his parents, and talk to his friends. Which one is the best choice?",
  "SITUATION 06: Your brother is in love with a girl in his high school. What will you do: ask him to stop, let him continue under your control, and talk to parents?",
  "SITUATION 07: Your sister has told lies about many things, and she continues doing this without changing. You are thinking about what to do: talk to her, talk to parents, or let her continue?",
  "SITUATION 08: You have a headache. You are thinking about what to do. Three options are: doing yoga, taking medicine, or visiting the doctor. Which is the best choice?",
  "SITUATION 09: You are the director of your local hospital. You wish to improve the overall quality of the hospital. Three options are considered: investing in medical equipment to enhance treatment quality, collecting feedback from patients to improve services, and expanding hospital facilities to reduce overcrowding. What would you do to achieve that goal?",
  "SITUATION 10: Your uncle, who is 45 years old, would like to stay healthy. There are three options to choose: become a vegetarian, work out at the gym, or do exercise. Which one do you think is the best choice?",
  "SITUATION 11: Your sister wants to lose weight. There are three options to choose: going to the gym, going on a diet, and taking weight-loss medicine. Which one would you recommend her?",
  "SITUATION 12: Your school is trying to reduce the amount of plastic waste. Three solutions are suggested: encouraging students to bring reusable bottles, organizing a “no plastic day” every week, or putting up educational posters around the campus. Which one do you think is the most effective solution?",
  "SITUATION 13: Your friend is not good at foreign languages and wants to improve his English. Three options are: taking an English course, talking with friends at home, or joining an English-speaking club. Which one would you recommend?",
  "SITUATION 14: A group of your foreign students wants to learn Vietnamese history. Three activities are considered: visiting a museum, watching documentaries, and reading history books. Which one do you think is the best choice?",
  "SITUATION 15: You want to improve your English skills. You are considering three options: joining an English club, talking with native speakers, and travelling abroad. Which option do you think is the most effective, and why?",
  "SITUATION 01: Teachers at a high school are considering how to assess students. Three choices are suggested: teacher assessment, self-assessment, and peer assessment. Which one is the best choice?",
  "SITUATION 02: Your company is considering three promotional methods: offering discounts, distributing free samples, and organizing lucky draws. Which method do you think is the best choice?",
  "SITUATION 03: Your club wants to raise funds for a local charity project. You can choose one activity: organizing a charity run, hosting a bake sale, or holding an art auction. Which one would you recommend?",
  "SITUATION 04: Your group is tasked with conducting a customer satisfaction survey. Three formats are considered: face-to-face interviews, online questionnaires, and telephone surveys. Which format would you choose?",
  "SITUATION 05: Your school wants to promote a new environmental campaign. Three advertising channels are suggested: social media, printed flyers, and school banners. Which channel is the most effective?",
  "SITUATION 06: You are preparing a presentation on a new product. There are three options for you to choose to present the product: a PowerPoint slide, a poster, and a video. Which is the best choice?",
  "SITUATION 07: You are going to give a presentation next week. You need to choose a topic that will be interesting for your audience. There are three options: local music, famous architecture, and environmental programs. Which one would you choose?",
  "SITUATION 01: Your school is about to conduct a survey to find out students’ opinions on issues that have a heavy impact on the community. Three actions are considered: smoking in restaurants, using mobile phones while driving, and making noise in public places. Which one do you think has the heaviest impact on the community?",
  "SITUATION 02: Your co-worker wants to learn to play the guitar. There are three possible options: using a tutorial app, taking part in a private course, or learning from a friend who plays guitar well. Which one do you think is the best choice?",
  "SITUATION 03: Your school is organizing a presentation about your country. You can choose one topic to talk about: cultural events, historical achievements, or economic achievements. Which one would you choose?",
  "SITUATION 04: Your foreign friend wants to learn more about Vietnamese culture during her short trip. She can choose between visiting a traditional village, attending a local festival, or exploring a national museum. Which place would you recommend?",
  "SITUATION 05: You and your friends are going to celebrate a special occasion together. You are considering three types of meals: a barbecue, a buffet, or a sit-down dinner at a restaurant. Which one would you choose?",
  "SITUATION 06: Your school is organizing a science event, and students are encouraged to contribute in some way. You are considering three options: donating science books, inviting a scientist to give a talk, or organizing a science-themed game. Which one would you choose?",
  "SITUATION 07: You are going to study abroad for a short period of time. You want to take a course to improve yourself. You are considering three options: a computer course, a public speaking course, and a time management course. What do you choose?",
  "SITUATION 08: Your school is going to organize a year-end party for students. You are asked to take part in the preparation. You are considering three options: decorating the event area, being in charge of organizing the event, and inviting special guests. Which option would you choose?",
  "SITUATION 09: Your local authority is planning to improve traffic safety in your city. You are asked to choose the most effective solution among the following: raising public awareness of traffic laws, increasing the legal driving age, and placing more traffic signs around the city. Which one is the best choice?",
  "SITUATION 10: You are going to organize a workshop for students who are looking for internships. You are considering three main topics to include in your workshop: how to improve workplace skills, how to prepare well for job interviews, or how to write an impressive CV/resumé. Which one is the best choice?",
  "SITUATION 11: Your younger brother has just graduated from high school and is unsure about what to do next. You are considering three options to suggest to him: finding a job, continuing his studies, or doing volunteer work. Which one would you recommend?",
  "SITUATION 12: One day, you receive a large amount of money transferred to your bank account by mistake. You don’t know who sent it. You are considering three options: keeping silent and doing nothing, informing your bank about the transfer, and reporting the case to the police. Which one would you choose?",
  "SITUATION 13: Your friend wants to read something new to expand her knowledge and explore the world in a different way. You are considering three book options to recommend to her: a mystery novel, a romance novel, and a science fiction book. Which one would you choose?",
  "SITUATION 14: Your youth club is supposed to invite a speaker to talk about his/her life experience. Three options are suggested: a famous singer, a company president, or an excellent student. Which one is the best choice?",
  "SITUATION 15: You are going to organize a workshop about healthy living. You need to choose a suitable guest speaker. There are three options: a nutritionist, a gym trainer, and a yoga instructor. Which one would you choose, and why?",
  "SITUATION 16: Your friend is deciding what to read next. She is considering three genres: a science non-fiction book, a science-fiction book, or an adventure novel. Which one would you recommend her, and why?"
];

// Format options helper in JS
function formatExamPromptOptions(prompt) {
    let m = prompt.match(/(:\s*)([^:,?]+?),\s*([^:,?]+?),\s*(?:(and|or)\s+|(both\s+))?([^:,?]+?)(\.|\?|\n|$)/);
    if (m) {
        let prefix = m[1];
        let opt1 = m[2].trim();
        let opt2 = m[3].trim();
        let conj = m[4] || "";
        let both = m[5] || "";
        let opt3 = m[6].trim();
        let end_punct = m[7];

        let last_part = conj ? (conj + " <strong><em>" + opt3 + "</em></strong>") :
                       (both ? ("<strong><em>" + both + opt3 + "</em></strong>") : ("<strong><em>" + opt3 + "</em></strong>"));
        let formatted = prefix + "<strong><em>" + opt1 + "</em></strong>, <strong><em>" + opt2 + "</em></strong>, " + last_part + end_punct;
        return prompt.slice(0, m.index) + formatted + prompt.slice(m.index + m[0].length);
    }

    let m2 = prompt.match(/((?:suggested modes of transport are|choose among|decide between|choose between|considering)\s+)([^.,?]+?),\s*([^.,?]+?),\s*(?:(and|or)\s+)?([^.,?]+?)(\.|\?|\n|$)/i);
    if (m2) {
        let prefix = m2[1];
        let opt1 = m2[2].trim();
        let opt2 = m2[3].trim();
        let conj = m2[4] || (prompt.includes(" or ") ? "or" : "and");
        let opt3 = m2[5].trim();
        let end_punct = m2[6];

        let formatted = prefix + "<strong><em>" + opt1 + "</em></strong>, <strong><em>" + opt2 + "</em></strong>, " + conj + " <strong><em>" + opt3 + "</em></strong>" + end_punct;
        return prompt.slice(0, m2.index) + formatted + prompt.slice(m2.index + m2[0].length);
    }

    return prompt;
}

// Global function to launch exam with any situation
window.startExamWithPrompt = function(promptText) {
    if (window.resetExamTimer) {
        window.resetExamTimer();
    }

    // Track active situation ID for progress completion
    state.activeExamSituationId = null;
    const cards = document.querySelectorAll('.practice-situation-card');
    const cleanSearch = promptText.replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
    for (const c of cards) {
        const pEl = c.querySelector('.sit-prompt-text');
        if (pEl) {
            const cNorm = pEl.textContent.toLowerCase().replace(/[^a-z0-9]/g, '');
            if ((cleanSearch.length >= 25 && cNorm.includes(cleanSearch.slice(0, 30))) || (cNorm.length >= 25 && cleanSearch.includes(cNorm.slice(0, 30)))) {
                state.activeExamSituationId = c.getAttribute('data-sit-id');
                break;
            }
        }
    }

    const promptDisplay = document.getElementById('exam-prompt-content');
    if (promptDisplay) {
        let cleanPrompt = promptText.trim();
        if (cleanPrompt.includes(':')) {
            let parts = cleanPrompt.split(':');
            cleanPrompt = parts.slice(1).join(':').trim();
        }
        promptDisplay.innerHTML = formatExamPromptOptions(cleanPrompt);
    }

    const timerNavItem = document.querySelector('.nav-item[data-target="tool-timer"]');
    if (timerNavItem) {
        timerNavItem.click();
    } else {
        const pane = document.getElementById('tool-timer');
        if (pane) {
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
            pane.classList.add('active');
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            const topTitle = document.getElementById('top-title');
            if (topTitle) topTitle.textContent = 'PHÒNG THI THỬ & GHI ÂM VSTEP';
        }
    }

    const timerSection = document.getElementById('tool-timer');
    if (timerSection) {
        timerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    
    const transContent = document.getElementById('exam-translation-content');
    if (transContent) {
        let cleanRaw = promptText.replace(/<[^>]+>/g, '').trim();
        if (cleanRaw.includes(':')) {
            cleanRaw = cleanRaw.split(':').slice(1).join(':').trim();
        }
        let foundTrans = PROMPT_TRANSLATIONS_MAP[cleanRaw] || PROMPT_TRANSLATIONS_MAP[promptText.trim()];
        if (!foundTrans) {
            const normSearch = cleanRaw.toLowerCase().replace(/[^a-z0-9]/g, '');
            const cards = document.querySelectorAll('.practice-situation-card, .prompt-banner-box, .sample-spotlight');
            for (const c of cards) {
                const pEl = c.querySelector('.sit-prompt-text, .prompt-banner');
                if (pEl) {
                    const normCard = pEl.textContent.toLowerCase().replace(/[^a-z0-9]/g, '');
                    if ((normSearch.length >= 20 && normCard.includes(normSearch.slice(0, 25))) || (normCard.length >= 20 && normSearch.includes(normCard.slice(0, 25)))) {
                        const tEl = c.querySelector('.trans-text, .sit-translation-box');
                        if (tEl) {
                            foundTrans = tEl.innerHTML.trim();
                            PROMPT_TRANSLATIONS_MAP[cleanRaw] = foundTrans;
                            break;
                        }
                    }
                }
            }
        }
        transContent.innerHTML = foundTrans || "Bản dịch đang được cập nhật...";
    }
    const examTransBox = document.getElementById('exam-translation-box');
    const examTransBtn = document.getElementById('exam-toggle-trans-btn');
    if (examTransBox) examTransBox.classList.add('hidden');
    if (examTransBtn) {
        examTransBtn.innerHTML = '<i class="fa-solid fa-language"></i> Dịch đề thi';
        examTransBtn.style.color = '';
        examTransBtn.style.background = '';
    }

    showToast('Đã nạp đề vào Phòng Thi Thử! Bấm "Bắt đầu làm bài" khi sẵn sàng 🎙️');
};

// ==========================================================================
// VSTEP EXAM SIMULATOR & VOICE RECORDER LOGIC
// ==========================================================================
let mediaRecorder = null;
let audioChunks = [];
let audioStream = null;
let recognition = null;
let currentAudioBlobUrl = null;

function initExamTimerAndRecorder() {
    const timerDisplay = document.getElementById('timer-display');
    const phaseBadge = document.getElementById('timer-phase-badge');
    const statusHint = document.getElementById('exam-status-hint');
    const startBtn = document.getElementById('timer-start-btn');
    const pauseBtn = document.getElementById('timer-pause-btn');
    const skipBtn = document.getElementById('timer-skip-btn');
    const finishBtn = document.getElementById('timer-finish-btn');
    const resetBtn = document.getElementById('timer-reset-btn');
    const progressCircle = document.getElementById('timer-progress-circle');
    const micVisualizer = document.getElementById('mic-visualizer');
    
    const listenPromptBtn = document.getElementById('exam-listen-prompt-btn');
    const randomPromptBtn = document.getElementById('exam-random-prompt-btn');
    const examTransBtn = document.getElementById('exam-toggle-trans-btn');
    const examTransBox = document.getElementById('exam-translation-box');
    const clearNotesBtn = document.getElementById('clear-notes-btn');
    const scratchpad = document.getElementById('exam-scratchpad');
    
    const liveTranscript = document.getElementById('exam-live-transcript');
    const wordCounterBadge = document.getElementById('word-counter-badge');
    
    const playbackBox = document.getElementById('exam-playback-box');
    const recordedPlayer = document.getElementById('recorded-audio-player');
    const downloadBtn = document.getElementById('download-audio-btn');
    const reTestBtn = document.getElementById('re-test-btn');

    if (!timerDisplay) return;

    const CIRCLE_CIRCUMFERENCE = 628;

    if (listenPromptBtn) {
        listenPromptBtn.addEventListener('click', () => {
            const promptContent = document.getElementById('exam-prompt-content');
            if (promptContent) {
                speakText(promptContent.innerText);
            }
        });
    }

    if (randomPromptBtn) {
        randomPromptBtn.addEventListener('click', () => {
            const randIdx = Math.floor(Math.random() * ALL_SITUATIONS_POOL.length);
            const randSit = ALL_SITUATIONS_POOL[randIdx];
            window.startExamWithPrompt(randSit);
        });
    }

    if (examTransBtn && examTransBox) {
        examTransBtn.addEventListener('click', () => {
            const isHidden = examTransBox.classList.toggle('hidden');
            if (isHidden) {
                examTransBtn.innerHTML = '<i class="fa-solid fa-language"></i> Dịch đề thi';
                examTransBtn.style.color = '';
                examTransBtn.style.background = '';
            } else {
                examTransBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Ẩn bản dịch';
                examTransBtn.style.color = 'var(--primary)';
                examTransBtn.style.background = '#dbeafe';
            }
        });
    }

    if (clearNotesBtn && scratchpad) {
        clearNotesBtn.addEventListener('click', () => {
            scratchpad.value = '';
            showToast('Đã xoá nội dung nháp');
        });
    }

    if (reTestBtn) {
        reTestBtn.addEventListener('click', () => {
            resetExam();
            const randIdx = Math.floor(Math.random() * ALL_SITUATIONS_POOL.length);
            window.startExamWithPrompt(ALL_SITUATIONS_POOL[randIdx]);
        });
    }

    function updateDisplay() {
        const minutes = Math.floor(state.timer.timeLeft / 60);
        const seconds = state.timer.timeLeft % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        const progress = state.timer.totalTime > 0 ? (state.timer.timeLeft / state.timer.totalTime) : 0;
        const offset = CIRCLE_CIRCUMFERENCE - (progress * CIRCLE_CIRCUMFERENCE);
        if (progressCircle) {
            progressCircle.style.strokeDashoffset = offset;
        }
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        try {
            recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'en-US';

            recognition.onresult = (event) => {
                let transcriptText = '';
                for (let i = 0; i < event.results.length; i++) {
                    transcriptText += event.results[i][0].transcript + ' ';
                }
                if (liveTranscript) {
                    liveTranscript.innerHTML = transcriptText;
                    const words = transcriptText.trim().split(/\s+/).filter(Boolean);
                    if (wordCounterBadge) {
                        wordCounterBadge.textContent = `${words.length} từ`;
                    }
                }
            };

            recognition.onerror = (err) => {
                console.log('Speech recognition notice:', err.error);
            };
        } catch (e) {
            console.log('SpeechRecognition setup error:', e);
        }
    }

    async function startRecordingAudio() {
        audioChunks = [];
        try {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                console.warn('getUserMedia not supported on this browser/environment');
                return;
            }
            audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            let options = { mimeType: 'audio/webm' };
            if (typeof MediaRecorder === 'undefined') return;
            if (!MediaRecorder.isTypeSupported || !MediaRecorder.isTypeSupported('audio/webm')) {
                if (MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported('audio/mp4')) {
                    options = { mimeType: 'audio/mp4' };
                } else {
                    options = {};
                }
            }

            mediaRecorder = new MediaRecorder(audioStream, options);
            mediaRecorder.ondataavailable = (e) => {
                if (e.data && e.data.size > 0) {
                    audioChunks.push(e.data);
                }
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: mediaRecorder.mimeType || 'audio/webm' });
                if (currentAudioBlobUrl) {
                    URL.revokeObjectURL(currentAudioBlobUrl);
                }
                currentAudioBlobUrl = URL.createObjectURL(audioBlob);
                
                if (recordedPlayer) {
                    recordedPlayer.src = currentAudioBlobUrl;
                }
                if (downloadBtn) {
                    downloadBtn.href = currentAudioBlobUrl;
                    const student = (state.student.name || 'HocVien').replace(/\s+/g, '_');
                    const now = new Date();
                    const dateStr = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}`;
                    downloadBtn.download = `VSTEP_Speaking_Part02_${student}_${dateStr}.webm`;
                }

                if (playbackBox) {
                    playbackBox.classList.remove('hidden');
                    playbackBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            };

            mediaRecorder.start(1000);

            if (recognition) {
                try {
                    recognition.start();
                } catch (e) {}
            }

            if (micVisualizer) micVisualizer.classList.remove('hidden');
        } catch (err) {
            console.warn('Microphone access notice:', err);
            showToast('⚠️ Chưa bật được micro. Đồng hồ vẫn tiếp tục đếm giờ!');
        }
    }

    function stopRecordingAudio() {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            try { mediaRecorder.stop(); } catch(e) {}
        }
        if (audioStream) {
            try { audioStream.getTracks().forEach(track => track.stop()); } catch(e) {}
            audioStream = null;
        }
        if (recognition) {
            try { recognition.stop(); } catch (e) {}
        }
        if (micVisualizer) micVisualizer.classList.add('hidden');
    }

    function setPhase(phase) {
        state.timer.phase = phase;
        state.timer.isPaused = false;

        if (phase === 'prep') {
            state.timer.timeLeft = 60;
            state.timer.totalTime = 60;
            phaseBadge.textContent = '⏳ GIAI ĐOẠN 1: CHUẨN BỊ (01 PHÚT)';
            phaseBadge.style.background = '#dbeafe';
            phaseBadge.style.color = '#1e40af';
            statusHint.innerHTML = 'Đang trong <strong>1 phút chuẩn bị</strong>. Hãy đọc kỹ đề bài và ghi chú nhanh dàn ý vào khung nháp bên phải.';
            
            startBtn.classList.add('hidden');
            if (pauseBtn) {
                pauseBtn.classList.remove('hidden');
                pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Tạm dừng';
                pauseBtn.classList.remove('primary');
                pauseBtn.classList.add('secondary');
            }
            skipBtn.classList.remove('hidden');
            finishBtn.classList.add('hidden');
            if (playbackBox) playbackBox.classList.add('hidden');
            if (progressCircle) progressCircle.style.stroke = 'var(--primary, #2563eb)';
            if (liveTranscript) liveTranscript.innerHTML = '<em>Sẵn sàng nhận diện lời nói khi bắt đầu ghi âm...</em>';
            if (wordCounterBadge) wordCounterBadge.textContent = '0 từ';

        } else if (phase === 'speak') {
            state.timer.timeLeft = 180;
            state.timer.totalTime = 180;
            phaseBadge.textContent = '🔴 GIAI ĐOẠN 2: ĐANG GHI ÂM BÀI NÓI (03 PHÚT)';
            phaseBadge.style.background = '#fee2e2';
            phaseBadge.style.color = '#991b1b';
            statusHint.innerHTML = '<strong>Hệ thống đang ghi âm trực tiếp!</strong> Hãy tự tin trình bày trọn vẹn bài nói theo cấu trúc 3 bước.';

            startBtn.classList.add('hidden');
            if (pauseBtn) {
                pauseBtn.classList.remove('hidden');
                pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Tạm dừng';
                pauseBtn.classList.remove('primary');
                pauseBtn.classList.add('secondary');
            }
            skipBtn.classList.add('hidden');
            finishBtn.classList.remove('hidden');
            if (progressCircle) progressCircle.style.stroke = '#ef4444';

            playBeep(880, 0.4);
            showToast('🎙️ BẮT ĐẦU GHI ÂM (03 PHÚT)! Hãy tự tin trình bày nhé!');
            startRecordingAudio();

        } else if (phase === 'finished') {
            phaseBadge.textContent = '🏆 HOÀN THÀNH BÀI THI!';
            phaseBadge.style.background = '#d1fae5';
            phaseBadge.style.color = '#065f46';
            statusHint.innerHTML = '<strong>Chúc mừng bạn đã hoàn thành bài thi!</strong> Bạn có thể nghe lại bài nói hoặc tải file ghi âm về máy bên dưới.';

            startBtn.classList.remove('hidden');
            startBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Thi lại đề này';
            if (pauseBtn) pauseBtn.classList.add('hidden');
            skipBtn.classList.add('hidden');
            finishBtn.classList.add('hidden');

            stopRecordingAudio();
            if (window.confetti) {
                try { window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } }); } catch(e) {}
            }
            playBeep(523.25, 0.5);

            if (state.activeExamSituationId) {
                if (!state.completedSituations.includes(state.activeExamSituationId)) {
                    state.completedSituations.push(state.activeExamSituationId);
                    applyCompletedSituationsUI();
                }
            }
            state.mockTestsCompleted = (state.mockTestsCompleted || 0) + 1;
            updateProgressUI();
            saveLearningProgress(true);

            showToast('🎉 Chúc mừng bạn đã hoàn thành bài thi Speaking Part 02!');

        } else {
            state.timer.timeLeft = 60;
            state.timer.totalTime = 60;
            phaseBadge.textContent = '⏱️ SẴN SÀNG VÀO THI';
            phaseBadge.style.background = '#eff6ff';
            phaseBadge.style.color = '#1e40af';
            statusHint.innerHTML = 'Nhấp <strong>"Bắt đầu làm bài"</strong> để bắt đầu 1 phút chuẩn bị. Sau 1 phút, hệ thống sẽ tự động bật micro và đếm ngược 3 phút ghi âm.';

            startBtn.classList.remove('hidden');
            startBtn.innerHTML = '<i class="fa-solid fa-play"></i> Bắt đầu làm bài';
            if (pauseBtn) pauseBtn.classList.add('hidden');
            skipBtn.classList.remove('hidden');
            finishBtn.classList.add('hidden');
            if (micVisualizer) micVisualizer.classList.add('hidden');
            if (progressCircle) progressCircle.style.stroke = 'var(--primary, #2563eb)';
            stopRecordingAudio();
        }
        updateDisplay();
    }

    function tick() {
        if (state.timer.timeLeft > 0) {
            state.timer.timeLeft--;
            if (state.timer.timeLeft <= 5 && state.timer.timeLeft > 0) {
                playBeep(440, 0.08);
            }
            updateDisplay();
        } else {
            if (state.timer.phase === 'prep') {
                setPhase('speak');
            } else if (state.timer.phase === 'speak') {
                clearInterval(state.timer.interval);
                state.timer.interval = null;
                setPhase('finished');
            }
        }
    }

    startBtn.addEventListener('click', () => {
        if (state.timer.interval) return;

        if (state.timer.phase === 'idle' || state.timer.phase === 'finished') {
            setPhase('prep');
        }

        state.timer.interval = setInterval(tick, 1000);
        showToast('Bắt đầu 1 phút chuẩn bị! ⏳');
    });

    if (pauseBtn) {
        pauseBtn.addEventListener('click', () => {
            if (!state.timer.interval && !state.timer.isPaused) return;

            if (!state.timer.isPaused) {
                // Pause
                clearInterval(state.timer.interval);
                state.timer.interval = null;
                state.timer.isPaused = true;
                pauseBtn.innerHTML = '<i class="fa-solid fa-play"></i> Tiếp tục';
                pauseBtn.classList.add('primary');
                pauseBtn.classList.remove('secondary');
                if (mediaRecorder && mediaRecorder.state === 'recording') {
                    try { mediaRecorder.pause(); } catch(e) {}
                }
                showToast('Đã tạm dừng tính giờ ⏸️');
            } else {
                // Resume
                state.timer.isPaused = false;
                state.timer.interval = setInterval(tick, 1000);
                pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Tạm dừng';
                pauseBtn.classList.remove('primary');
                pauseBtn.classList.add('secondary');
                if (mediaRecorder && mediaRecorder.state === 'paused') {
                    try { mediaRecorder.resume(); } catch(e) {}
                }
                showToast('Đang tiếp tục tính giờ ▶️');
            }
        });
    }

    skipBtn.addEventListener('click', () => {
        setPhase('speak');
        if (!state.timer.interval) {
            state.timer.interval = setInterval(tick, 1000);
        }
    });

    finishBtn.addEventListener('click', () => {
        if (state.timer.interval) {
            clearInterval(state.timer.interval);
            state.timer.interval = null;
        }
        setPhase('finished');
    });

    function resetExam() {
        if (state.timer.interval) {
            clearInterval(state.timer.interval);
            state.timer.interval = null;
        }
        state.timer.isPaused = false;
        setPhase('idle');
    }

    resetBtn.addEventListener('click', resetExam);
    window.resetExamTimer = resetExam;

    setPhase('idle');
}


/* ==========================================================================
   6. FLASHCARDS SYSTEM
   ========================================================================== */
const flashcardData = [
    { tag: "GIFT", en: "carry personal items", vi: "mang theo đồ đạc cá nhân", hint: "Benefits of handbag" },
    { tag: "GIFT", en: "keep personal belongings organized", vi: "giữ đồ đạc cá nhân gọn gàng", hint: "Benefits of handbag" },
    { tag: "GIFT", en: "support and protect the feet", vi: "nâng đỡ và bảo vệ bàn chân", hint: "Benefits of shoes" },
    { tag: "GIFT", en: "reduce eye strain & see clearly", vi: "giảm mỏi mắt & nhìn rõ ràng hơn", hint: "Benefits of glasses" },
    { tag: "GIFT", en: "check time & manage schedule better", vi: "xem giờ & quản lý thời gian tốt hơn", hint: "Benefits of watch" },
    { tag: "GIFT", en: "reduce outside noise & focus better", vi: "giảm tiếng ồn bên ngoài & tập trung hơn", hint: "Benefits of headphones" },
    { tag: "GIFT", en: "keep special memories & decorate room", vi: "lưu giữ kỷ niệm & trang trí phòng", hint: "Benefits of picture frame" },
    
    { tag: "ACTIVITY", en: "walk along the shore", vi: "đi dạo dọc bờ biển", hint: "Beach activity" },
    { tag: "ACTIVITY", en: "enjoy the fresh air and sunshine", vi: "tận hưởng không khí trong lành & ánh nắng", hint: "Outdoor activity" },
    { tag: "ACTIVITY", en: "spend quality time together", vi: "dành thời gian ý nghĩa bên nhau", hint: "Bonding activity" },
    { tag: "ACTIVITY", en: "maintain a healthy lifestyle", vi: "duy trì lối sống lành mạnh", hint: "Health benefits" },
    { tag: "ACTIVITY", en: "develop useful soft skills", vi: "phát triển kỹ năng mềm hữu ích", hint: "Educational activity" },
    
    { tag: "LOCATION", en: "comfortable and relaxing atmosphere", vi: "bầu không khí thoải mái và thư giãn", hint: "Choosing location" },
    { tag: "LOCATION", en: "well-equipped with modern facilities", vi: "trang bị đầy đủ cơ sở vật chất hiện đại", hint: "Event venue" },
    { tag: "LOCATION", en: "located in a convenient area", vi: "nằm ở vị trí thuận tiện đi lại", hint: "Location pro" },
    { tag: "LOCATION", en: "famous for local food and culture", vi: "nổi tiếng với ẩm thực & văn hoá địa phương", hint: "Tourism destination" },
    
    { tag: "TRANSPORT", en: "convenient and flexible", vi: "tiện lợi và linh hoạt (xe máy)", hint: "Motorbike" },
    { tag: "TRANSPORT", en: "avoid bad weather & travel safely", vi: "tránh thời tiết xấu & đi lại an toàn (ô tô)", hint: "Car" },
    { tag: "TRANSPORT", en: "fast and time-saving for long distance", vi: "nhanh và tiết kiệm thời gian đi xa (máy bay)", hint: "Plane" },
    { tag: "TRANSPORT", en: "affordable and eco-friendly", vi: "tiết kiệm chi phí & bảo vệ môi trường (xe buýt)", hint: "Bus" },
    
    { tag: "SOLUTION", en: "deals with the root cause of the problem", vi: "giải quyết tận gốc rễ của vấn đề", hint: "Solution reason" },
    { tag: "SOLUTION", en: "simple and practical to follow", vi: "đơn giản và thiết thực để thực hiện", hint: "Solution reason" },
    { tag: "SOLUTION", en: "creates lasting positive changes", vi: "tạo ra những thay đổi tích cực lâu dài", hint: "Long-term solution" },
    
    { tag: "CAREER", en: "turn lifelong dream into reality", vi: "biến ước mơ cả đời thành hiện thực", hint: "Full-time job" },
    { tag: "CAREER", en: "balance between work and personal life", vi: "cân bằng giữa công việc và đời sống cá nhân", hint: "Work-life balance" },
    { tag: "CAREER", en: "gain real work experience before graduation", vi: "tích luỹ kinh nghiệm thực tế trước tốt nghiệp", hint: "Part-time job" },
    { tag: "CAREER", en: "improve English speaking naturally", vi: "cải thiện phản xạ tiếng Anh tự nhiên", hint: "Part-time job" },
    { tag: "CAREER", en: "flexible schedule that fits student life", vi: "lịch làm việc linh hoạt phù hợp sinh viên", hint: "Part-time job" },
    
    { tag: "FACTOR", en: "guarantees high educational quality", vi: "đảm bảo chất lượng giáo dục hàng đầu", hint: "University ranking" },
    { tag: "FACTOR", en: "ensure financial stability for family", vi: "đảm bảo an toàn tài chính cho gia đình", hint: "Affordable tuition fees" },
    { tag: "FACTOR", en: "save travel time and commuting costs", vi: "tiết kiệm thời gian và chi phí đi lại", hint: "Distance / Location" },
    { tag: "FACTOR", en: "build long-term trust and loyalty", vi: "xây dựng niềm tin và sự gắn kết lâu dài", hint: "Honesty & integrity" },
    { tag: "FACTOR", en: "well-equipped labs and rich libraries", vi: "phòng thí nghiệm hiện đại & thư viện phong phú", hint: "Campus facilities" },
    { tag: "FACTOR", en: "offer great potential for advancement", vi: "mang lại tiềm năng phát triển lớn", hint: "Career prospects" },
    
    { tag: "FORM", en: "reach a wider audience online", vi: "tiếp cận lượng khán giả rộng lớn trên mạng", hint: "Social media / Video" },
    { tag: "FORM", en: "provide visual and memorable information", vi: "cung cấp thông tin trực quan và đáng nhớ", hint: "Poster / Slide" },
    { tag: "FORM", en: "encourage direct interaction and feedback", vi: "khuyến khích tương tác và phản hồi trực tiếp", hint: "Presentation / Peer review" },
    { tag: "FORM", en: "collect honest and objective opinions", vi: "thu thập ý kiến trung thực và khách quan", hint: "Anonymous survey" },
    
    { tag: "OTHER", en: "raise environmental awareness", vi: "nâng cao nhận thức bảo vệ môi trường", hint: "Community impact / Green campaign" },
    { tag: "OTHER", en: "stimulate imagination and critical thinking", vi: "kích thích trí tưởng tượng & tư duy phản biện", hint: "Sci-fi / Mystery books" },
    { tag: "OTHER", en: "develop practical life skills", vi: "phát triển các kỹ năng sống thực tế", hint: "Advanced challenge" }
];

function initFlashcards() {
    state.flashcards = [...flashcardData];
    const cardBox = document.getElementById('flashcard-box');
    const frontText = document.getElementById('fc-front-text');
    const frontTag = document.getElementById('fc-front-tag');
    const frontHint = document.getElementById('fc-front-hint');
    const backText = document.getElementById('fc-back-text');
    const backTag = document.getElementById('fc-back-tag');
    const backHint = document.getElementById('fc-back-hint');
    const prevBtn = document.getElementById('fc-prev-btn');
    const nextBtn = document.getElementById('fc-next-btn');
    const shuffleBtn = document.getElementById('fc-shuffle-btn');
    const counterDisplay = document.getElementById('fc-counter');
    const speakCardBtn = document.getElementById('fc-speak-btn');
    const filterSelect = document.getElementById('fc-filter');

    if (!cardBox) return;

    function renderCard() {
        const item = state.flashcards[state.currentCardIdx];
        if (!item) return;

        cardBox.classList.remove('flipped');

        frontTag.textContent = item.tag;
        frontText.textContent = item.en;
        frontHint.textContent = `💡 ${item.hint} (Nhấp vào thẻ để xem nghĩa tiếng Việt)`;

        backTag.textContent = item.tag;
        backText.textContent = item.vi;
        backHint.textContent = `🔊 ${item.en}`;

        counterDisplay.textContent = `${state.currentCardIdx + 1} / ${state.flashcards.length}`;

        if (item && item.en) {
            if (!state.reviewedCardsSet) state.reviewedCardsSet = new Set();
            state.reviewedCardsSet.add(item.en);
            state.flashcardsReviewed = state.reviewedCardsSet.size;
            updateProgressUI();
            saveLearningProgress(true);
        }
    }

    cardBox.addEventListener('click', () => {
        cardBox.classList.toggle('flipped');
    });

    prevBtn.addEventListener('click', () => {
        if (state.currentCardIdx > 0) {
            state.currentCardIdx--;
            renderCard();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (state.currentCardIdx < state.flashcards.length - 1) {
            state.currentCardIdx++;
            renderCard();
        }
    });

    shuffleBtn.addEventListener('click', () => {
        state.flashcards.sort(() => Math.random() - 0.5);
        state.currentCardIdx = 0;
        renderCard();
        showToast('Đã xáo trộn thứ tự thẻ! 🔀');
    });

    speakCardBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = state.flashcards[state.currentCardIdx];
        if (item) {
            speakText(item.en);
        }
    });

    if (filterSelect) {
        filterSelect.addEventListener('change', () => {
            const filterVal = filterSelect.value;
            if (filterVal === 'ALL') {
                state.flashcards = [...flashcardData];
            } else {
                state.flashcards = flashcardData.filter(c => c.tag === filterVal);
            }
            state.currentCardIdx = 0;
            renderCard();
        });
    }

    renderCard();
}

/* ==========================================================================
   7. TOAST HELPER
   ========================================================================== */
function showToast(msg) {
    const existing = document.querySelector('.toast-msg');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--primary-blue);"></i><span>${msg}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(15px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}


window.switchSampleCard = function(btn, panelId) {
    const parent = btn.closest('.sample-spotlight') || btn.closest('.sit-sample-box');
    if (!parent) return;
    const allBtns = parent.querySelectorAll('.sample-opt-btn, .sit-sample-opt-btn');
    const allPanels = parent.querySelectorAll('.sample-card-panel, .sit-sample-opt-panel');

    allBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    allPanels.forEach(panel => {
        if (panel.id === panelId) {
            panel.classList.remove('hidden');
            panel.style.display = 'block';
        } else {
            panel.classList.add('hidden');
            panel.style.display = 'none';
        }
    });
};
