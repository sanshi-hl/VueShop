import Mock from 'mockjs';
import domain from '../axios/api';

const product = [
  {
    productId: 1,
    name: 'iPhone 12 Pro Max',
    preferential: ['国行正品', '送快充头', '七天无理由退换'],
    vipPrice: 9400,
    price: 9488,
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608376330113&di=5b1081e857aebb7b060ba1a1ccec945b&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Fsohulife%2F2020%2F11%2F04%2F160444060040519986.JPEG',
    property: [
      {
        title: '选择颜色',
        tags: ['石墨色', '银银色', '金色', '海蓝色'],
      },
      {
        title: '选择版本',
        tags: ['8+128G', '8+256G', '12+128G', '16+256G', '12+512G'],
      },
      {
        title: '选择套餐',
        tags: ['官方套餐', '套餐一', '套餐二', '套餐三'],
      },
    ],
    introduction: {
      imgs: [
        'https://img.alicdn.com/tfs/TB1tqFIxpzqK1RjSZFCXXbbxVXa-790-180.png',
        'https://img.alicdn.com/imgextra/i3/1710936647/O1CN01aZDUFu1yyNHoiQ7jP_!!1710936647.jpg',
        'https://img.alicdn.com/imgextra/i4/1710936647/O1CN01LlyKKt1yyNHoutW5Z_!!1710936647.jpg',
        'https://img.alicdn.com/imgextra/i1/1710936647/O1CN01dYXgYI1yyNIIBZCOE_!!1710936647.jpg',
        'https://img.alicdn.com/imgextra/i1/1710936647/O1CN01dYXgYI1yyNIIBZCOE_!!1710936647.jpg',
        'https://img.alicdn.com/imgextra/i2/1710936647/O1CN01qdaQ501yyNHnVsPpt_!!1710936647.jpg',
        'https://img.alicdn.com/imgextra/i2/1710936647/O1CN01dC9dnN1yyNIIBa0JT_!!1710936647.jpg',
      ],
      parameters: [
        '商品名称：iPhone 12 Pro Max',
        'CPU核心数：4*1.5GHz+4*1.2GHz',
        '电池类型：不可拆卸式电池',
        '操作系统：iOS',
        '后摄主摄像素：4800万像素',
        '前摄主摄像素：1600万像素',
        '机身颜色：石墨色 海蓝色 银色 金色',
        '充电器：10V/3.0A',
      ],
    },
  },
  {
    productId: 2,
    name: 'i7外星人笔记本电脑 吃鸡LOL游戏本17寸14寸轻薄便携学生戴尔手提',
    preferential: ['24期免息', '全国联保', '7天无理由退换'],
    vipPrice: 12899,
    price: 8000,
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608379103962&di=d81e884e27afdbad431c8182fdcc2cac&imgtype=0&src=http%3A%2F%2F00imgmini.eastday.com%2Fmobile%2F20201218%2F20201218225936_8f6a39c2108712e2633d6f0ae517749d_10.jpeg',
    property: [
      {
        title: '选择颜色',
        tags: ['白色', '黑色', '银色'],
      },
      {
        title: '内存硬盘容量',
        tags: ['8G+512GB', '16G+512GB', '16G+1T'],
      },
      {
        title: '选择套餐',
        tags: ['游戏套餐1', '游戏套餐2', '外星人大型吃鸡套餐'],
      },
    ],
    introduction: {
      imgs: [
        'https://img.alicdn.com/imgextra/i1/2209444299613/O1CN01uWtfnD2Kso0eHJ9Ic_!!2209444299613.jpg',
        'https://img.alicdn.com/imgextra/i2/2209444299613/O1CN01k6Y0Za2Kso0hzDLV7_!!2209444299613.jpg',
        'https://img.alicdn.com/imgextra/i4/2209444299613/O1CN01Iwazxk2Kso0d0ijOB_!!2209444299613.png',
        'https://img.alicdn.com/imgextra/i3/2209444299613/O1CN01AWhZ0E2Kso0ZubKFx_!!2209444299613.jpg',
        'https://img.alicdn.com/imgextra/i4/2209444299613/O1CN01BxGnqZ2Kso0fH0LEB_!!2209444299613.jpg',
        'https://img.alicdn.com/imgextra/i2/2209444299613/O1CN01vxShEA2Kso0g9bKP4_!!2209444299613.jpg',
        'https://img.alicdn.com/imgextra/i2/2209444299613/O1CN01Voikwu2Kso0c6MNZ0_!!2209444299613.jpg',
        'https://img.alicdn.com/imgextra/i2/2209444299613/O1CN01bFWedV2Kso0hzBbP9_!!2209444299613.jpg',
      ],
      parameters: [
        '商品名称：Alienware 17',
        '内存容量：16G',
        '硬盘容量: 512GB',
        'CPU: 英特尔 酷睿 i7-8700K',
        '屏幕刷新率: 144HZ',
        '笔记本电脑类型: 游戏本',
        '版本类型: 其他海外地区',
        '重量: 2.5kg及以上',
      ],
    },
  },

  {
    productId: 6,
    name: '苹果2019新款AirPods Pro无线耳机蓝牙降噪运动耳机',
    preferential: ['24期免息', '全国联保', '国行原封'],
    vipPrice: 1738,
    price: 2309,
    imgUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2668032924,2022479665&fm=26&gp=0.jpg',
    property: [
      {
        title: '选择颜色',
        tags: ['白色'],
      },
      {
        title: '选择赠品',
        tags: ['18w快充头', 'airpods保护套', '十个替换耳机帽'],
      },
    ],
    introduction: {
      imgs: [
        'https://img.alicdn.com/tfs/TB1tqFIxpzqK1RjSZFCXXbbxVXa-790-180.png',
        'https://gdp.alicdn.com/imgextra/i1/4036567658/O1CN01pMjSi326RPghBLL5Z_!!4036567658.jpg',
        'https://gdp.alicdn.com/imgextra/i1/4036567658/O1CN01gKDulY26RPguqF5bM_!!4036567658.jpg',
        'https://gdp.alicdn.com/imgextra/i4/4036567658/O1CN01Lw7EeS26RPgPbZ3ts_!!4036567658.png',
        'https://img.alicdn.com/imgextra/i3/4036567658/O1CN01PUb5AG26RPdoV2wZ6_!!4036567658.jpg',
        'https://img.alicdn.com/imgextra/i1/4036567658/O1CN01Ge2SkM26RPdoV4Hi6_!!4036567658.jpg',
        'https://img.alicdn.com/imgextra/i3/4036567658/O1CN01Fh1oa026RPdqLBf27_!!4036567658.jpg',
        'https://img.alicdn.com/imgextra/i2/4036567658/O1CN01eLuzGP26RPdqXEfbE_!!4036567658.jpg',
        'https://img.alicdn.com/imgextra/i4/4036567658/O1CN01SacAfR26RPdrGaKIf_!!4036567658.jpg',
      ],
      parameters: [
        '商品名称：Apple/苹果 AirPods Pro',
        '外壳材质：塑料',
        '苹果耳机型号：Airpods pro',
        '耳机售后服务：全国联保',
        '耳机与播放设备连接方式：蓝牙连接',
        '生产企业: 苹果公司',
      ],
    },
  },
];
Mock.mock('http://localhost:8080/categorys', {
  'data|1': [['手机', '男装', '大家电', '羽绒服', '数码', '宠物', '企业', '个护', '零食', '教育', '图书音像']],
});
Mock.mock(domain.slidImgs, {
  'data|1': [[
    'https://img.alicdn.com/tfs/TB1FjZ7VWL7gK0jSZFBXXXZZpXa-520-280.png',
    'https://aecpm.alicdn.com/imgextra/i1/66695381/O1CN01rFqtgy1pcXqyQ9gB8_!!66695381-0-alimamazszw.jpg',
    'https://aecpm.alicdn.com/simba/img/TB12NW9kH1YBuNjSszhSuwUsFXa.jpg',
    'https://img.alicdn.com/simba/img/TB1I3teXIfpK1RjSZFOSuu6nFXa.jpg',
    'https://img.alicdn.com/tfs/TB1wOidVWL7gK0jSZFBXXXZZpXa-520-280.jpg',
    'https://aecpm.alicdn.com/simba/img/TB1X6uHLVXXXXcCXVXXSutbFXXX.jpg',
    'https://img.alicdn.com/tps/i4/TB1XpfqfuH2gK0jSZJnSuuT1FXa.jpg_240x240q90.jpg',
  ]],
});
Mock.mock(domain.recommend, {
  'data|1': [[
    '家电', '数码产品', '童装', '收纳', '茶酒', '鲜花', '厨具', '美妆', '个人护理', '玩具', '零食', '箱包', '医药', '清洁', '运动户外',
  ]],
});
Mock.mock(domain.promotionImgs, {
  'data': [
    {
      id: 1,
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608376330113&di=5b1081e857aebb7b060ba1a1ccec945b&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Fsohulife%2F2020%2F11%2F04%2F160444060040519986.JPEG',
    },
    {
      id: 2,
      img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3849494908,3085072657&fm=26&gp=0.jpg',
    },
    {
      id: 3,
      img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1006254057,1679635610&fm=26&gp=0.jpg',
    },
    {
      id: 4,
      img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=328849827,3587884414&fm=26&gp=0.jpg',
    },
    {
      id: 5,
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608384122767&di=9ac9adca6fac50cacfe4f2e3670e2a85&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F0l%2Fej%2FQJ8409508432.jpg',
    },
  ],
});
/* eslint-disable */
// Mock.mock(domain.gallerys, {
//   'data|1': [{
//     'title|1': [[
//       '无线充电耳机 蓝牙降噪 运动耳机',
//       'YSL圣诞礼盒 小金条 小粉条',
//       '海贼王手办 三千世界索隆',
//       '百草味 干果零食大礼包 圣诞节礼物',
//       '星巴克 新款圣诞节杯子 极光星',
//     ]],
//     'url|1': [[
//       'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2668032924,2022479665&fm=26&gp=0.jpg',
//       'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608383588316&di=15922a07e961243691ddf81e77291910&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20181130%2Fccf0f43b38c246bfa37270f180a7c0d9.jpeg',
//       'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608383692645&di=13e06f3ca48b3d528f59a5e839cc2837&imgtype=0&src=http%3A%2F%2Fg.search3.alicdn.com%2Fimg%2Fbao%2Fuploaded%2Fi4%2Fi1%2F3193664800%2FO1CN01uKb8CZ1lKRh7NvB6P_%21%213193664800.jpg',
//       'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608383766260&di=70c312e0ec70914c188efc0ad1f483d3&imgtype=0&src=http%3A%2F%2Fcdn.178hui.com%2Fupload%2F2018%2F0111%2F19180576566.jpg',
//     ]],
//   }],
// });
Mock.mock(domain.gallerys, {
  'data': [
    {
      'id': 6,
      'title': 'Apple AirPods Pro 无线充电耳机 蓝牙降噪 运动耳机',
      'url': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2668032924,2022479665&fm=26&gp=0.jpg',
    },
    {
      'id': 7,
      'title': 'YSL圣诞礼盒 小金条 小粉条',
      'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608383588316&di=15922a07e961243691ddf81e77291910&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20181130%2Fccf0f43b38c246bfa37270f180a7c0d9.jpeg',
    },
    {
      'id': 8,
      'title': '海贼王手办 三千世界索隆',
      'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608383692645&di=13e06f3ca48b3d528f59a5e839cc2837&imgtype=0&src=http%3A%2F%2Fg.search3.alicdn.com%2Fimg%2Fbao%2Fuploaded%2Fi4%2Fi1%2F3193664800%2FO1CN01uKb8CZ1lKRh7NvB6P_%21%213193664800.jpg',
    },
    {
      'id': 9,
      'title': '百草味 干果零食大礼包 圣诞节礼物',
      'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608383766260&di=70c312e0ec70914c188efc0ad1f483d3&imgtype=0&src=http%3A%2F%2Fcdn.178hui.com%2Fupload%2F2018%2F0111%2F19180576566.jpg',
    },
    {
      'id': 10,
      'title': '星巴克 新款圣诞节杯子 极光星',
      'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608532485681&di=ca8f09d2bd85ec5fae83951a53a212af&imgtype=0&src=http%3A%2F%2Fci.xiaohongshu.com%2Fb3d1b01c-3743-4260-a0e3-9452dc41b9d8%40r_640w_640h.jpg',
    },
  ],
});
Mock.mock(domain.product,(req) => {
  const id = parseInt(JSON.parse(req.body).id);
  for (let i = 0; i < product.length; i++) {
    const element = product[i];
    if (element.productId === id) {
      return {
        status: '200',
        msg: 'success',
        data: product[i],
      };
    }
  }
  return {
    status: '500',
    msg: 'fail',
  }
});
