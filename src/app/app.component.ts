import { Component } from '@angular/core';
import {TravelTaipeiService} from './travel-taipei.service';
import { TravelTaipei } from './travel-taipei';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-200220205';
  travel1: TravelTaipei | undefined;
  travel2: Array<any> = [
    {
        "id": 72,
        "name": "士林慈諴宮",
        "introduction": "士林慈諴宮又稱士林媽祖廟，主祀天上聖母，位於遠近馳名的士林夜市之內。慈諴宮的前身為1796年（清嘉慶元年）業主何錦堂獻地所建的廟，當時稱為天后宮。1859年（咸豐9年），發生漳、泉械鬥，芝蘭街也遭波及火焚，天后宮亦付之一炬。舊街慘遭焚毀後，縉紳潘永清力主遷地另建新街，得到大多數街民的贊同，於是選擇在下樹林處建設新街，即今日的士林新街。同時在街區中央規劃為廟址，即現今慈諴宮所在地。\r\n\r\n慈諴宮是一座採兩殿、兩廊、兩護龍平面配置的廟宇，一共形成5個天井，兩殿之間以過水廊連接護龍，為典型殿堂式閩南式廟宇。第一進的三川殿的屋頂，是以歇山重簷式的翹脊屋頂，亦即俗稱的「太子樓」形式，正殿中門的單蟠龍八角柱為光緒年間所造，左右麒麟堵則是1828年的作品。門上的彩繪宮娥及門神尉遲宮、秦淑寶，畫工相當的精細，是近代重要的匠師陳玉峰的作品。正殿之旁有一幅士林舊街的石壁，讓人憑此懷想昔日士林的街道面貌景色。",
        "address": "111 臺北市士林區大南路84號",
        "tel": "+886-2-28802972"
    },
    {
        "id": 1,
        "name": "大稻埕碼頭_大稻埕碼頭貨櫃市集",
        "introduction": "大稻埕原是平埔族的居住地，因萬華（艋舺）同安人發生激烈的械鬥，造成族人移至大稻埕定居，開始大稻埕淡水河旁商店和房屋的興建，淡水港開放後，大稻埕在劉銘傳的治理下成為臺北城最繁華的物資集散中心，當中以茶葉、布料為主要貿易交易，當時的延平北路及貴德街一帶便是商業活動的重心，也讓大稻埕早年的歷史多采多姿、令人回味。\r\n\r\n",
        "address": "103 臺北市大同區大稻埕碼頭",
        "tel": "+886-2-27208889"
    },
    {
        "id": 278,
        "name": "新北市立十三行博物館",
        "introduction": "十三行博物館是臺灣第一個考古博物館，當初是為了保護國家二級古蹟的「十三行遺址」而興建；十三行文化屬於北臺灣地區的鐵器時代，時間大約在距今1,800~500年前，是目前臺灣唯一確定擁有煉鐵技術的史前居民。\r\n\r\n十三行博物館設有遺址出土各項重要文物常設展、特展廳、考古學習體驗室，詳細介紹了有關十三行文化、圓山文化等臺灣過往的遺跡與背景。一千多年前，淡水河左岸的居民住的是干欄屋，用的是人面陶罐，日常飲食則是取自大海裡的魚蝦貝類。他們的生活方式不是今日的我們能夠想像，但是從十三行博物館則可窺知一二。 1955年，一架空軍飛機行經八里上空，因為飛機上的羅盤出現磁力異常的反應，因而發現了十三行遺址。接著地質學家、考古學家前來探勘，發現了這裡是史前遺址，也成立了這座考古博物館。\r\n\r\n博物館以饒富趣味的方式，詳細介紹了由遺址所發現的十三行文化，讓我們知道十三行人在千年以前過的是什麼的生活；同時還不定期舉辦特展，有時介紹淡水河發展的歷史軌跡，有時也會有富含科學教育意味的考古探索，無論是哪一種，博物館都儘量設計得輕鬆有趣，讓遊客在娛樂之餘，也能吸收到豐富的知識，同時還能啟發孩子對歷史的興趣。經歷了館內豐足充實的心靈饗宴之後，也別忘了給自己來些味覺上的感官享受，「十三行ㄟ咖啡」提供了香醇好喝的咖啡及絕佳的觀景視野，如果不想待在室內，博物館頂的「鯨背沙丘」，也能讓你觀海、賞夕陽、還可以遠眺對岸漁人碼頭的點點漁火，感覺很不錯喔！",
        "address": "249 新北市八里區博物館路200號",
        "tel": "+886-2-26191313"
    },
    {
        "id": 2,
        "name": "關渡碼頭",
        "introduction": "關渡原名甘豆門，因背倚觀音山和大屯山，面向淡水河，成為一處地勢險要的港口，早年先民由關渡碼頭進入移居臺灣北部開墾，因此關渡的開發甚早，後因兩河(基隆河、淡水河)河口泥沙淤積，水運才逐漸沒落。\r\n\r\n關渡碼頭位於關渡自然公園及關渡宮旁，每當假日或夜晚均可見遊客駐足關渡碼頭週邊散步休息，亦有許多單車族由八里經關渡大橋前來，或由淡水前來，沿途風光明媚，是一處極佳的賞景地點。\r\n\r\n\r\n\r\n\r\n\r\n\r\n",
        "address": "112 臺北市北投區關渡碼頭",
        "tel": "+886-2-27208889"
    }];
  travelIndex = 0;
  changeItem(i: number){
    this.travelIndex = i;
  }
  delItem(i: string){
    this.travel2 = this.travel2.filter((d)=>{
      return d.id !== i
    });
  }
  addItem(data: any){
    this.travel2.push(data);
  }

  constructor(private travelTaipeiService: TravelTaipeiService) {}

  ngOnInit() {
    // this.travelTaipeiService.getAttractionsAll().subscribe((data: TravelTaipei) => {
    //   this.travel = data;
    // });
  }
}
