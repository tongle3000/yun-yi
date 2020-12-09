const registerData = [
    {
        id: "1",
        name: "富阳人民医院",
        img: "https://img01.yilianmeiti.com/website/images/hospital_def_5.png",
        category:[
            {
                id:'1', 
                title: '自助报到机',
                illustration: ['http://upload.qianlong.com/2020/1207/1607319828860.jpg','http://upload.qianlong.com/2020/1207/1607319828860.jpg'], // 使用说明图
            }
        ],
        service:[
            {
                id:'001',
                visitNum:['00101','00102','00103'],
                title:'呼吸内科',
                location:'4楼 C区',
                rooms:[
                    {
                        id: '1',
                        room:'1诊室',
                        doctor:'钟南山',
                        photo:'http://5b0988e595225.cdn.sohucs.com/images/20191112/66edc967bed44dd98ae54ab5640320e1.jpeg',
                        allNum: 20,
                        currentNum: 12,
                    },
                    {
                        id: '2',
                        room:'2诊室',
                        doctor:'刘德华',
                        photo:'http://5b0988e595225.cdn.sohucs.com/images/20191112/66edc967bed44dd98ae54ab5640320e1.jpeg',
                        allNum: 25,
                        currentNum: 25,
                    },
                    {
                        id: '3',
                        room:'3诊室',
                        doctor:'钟南山',
                        photo:'http://5b0988e595225.cdn.sohucs.com/images/20191112/66edc967bed44dd98ae54ab5640320e1.jpeg',
                        allNum: 20,
                        currentNum: 12,
                    },
                    {
                        id: '4',
                        room:'4诊室',
                        doctor:'刘德华',
                        photo:'http://5b0988e595225.cdn.sohucs.com/images/20191112/66edc967bed44dd98ae54ab5640320e1.jpeg',
                        allNum: 25,
                        currentNum: 8,
                    },
                    {
                        id: '5',
                        room:'5诊室',
                        doctor:'钟南山',
                        photo:'http://5b0988e595225.cdn.sohucs.com/images/20191112/66edc967bed44dd98ae54ab5640320e1.jpeg',
                        allNum: 20,
                        currentNum: 12,
                    },
                    {
                        id: '6',
                        room:'6诊室',
                        doctor:'刘德华',
                        photo:'http://5b0988e595225.cdn.sohucs.com/images/20191112/66edc967bed44dd98ae54ab5640320e1.jpeg',
                        allNum: 25,
                        currentNum: 8,
                    },
                    {
                        id: '7',
                        room:'7诊室',
                        doctor:'钟南山',
                        photo:'http://5b0988e595225.cdn.sohucs.com/images/20191112/66edc967bed44dd98ae54ab5640320e1.jpeg',
                        allNum: 20,
                        currentNum: 19,
                    },
                    {
                        id: '8',
                        room:'8诊室',
                        doctor:'刘德华',
                        photo:'http://5b0988e595225.cdn.sohucs.com/images/20191112/66edc967bed44dd98ae54ab5640320e1.jpeg',
                        allNum: 25,
                        currentNum: 8,
                    },
                    {
                        id: '9',
                        room:'9诊室',
                        doctor:'钟南山',
                        photo:'http://5b0988e595225.cdn.sohucs.com/images/20191112/66edc967bed44dd98ae54ab5640320e1.jpeg',
                        allNum: 20,
                        currentNum: 12,
                    },
                    {
                        id: '10',
                        room:'10诊室',
                        doctor:'刘德华',
                        photo:'http://5b0988e595225.cdn.sohucs.com/images/20191112/66edc967bed44dd98ae54ab5640320e1.jpeg',
                        allNum: 25,
                        currentNum: 8,
                    },
                ]
            },
            {
                id:'002',
                visitNum:['00201','00202','00203'],
                title:'妇产科',
                location:'5楼 A区',
                rooms:[
                    {
                        id: '1',
                        room:'8诊室',
                        doctor:'钟南山',
                        photo:'http://5b0988e595225.cdn.sohucs.com/images/20191112/66edc967bed44dd98ae54ab5640320e1.jpeg',
                        allNum: 20,
                        currentNum: 12,
                    },
                    {
                        id: '2',
                        room:'9诊室',
                        doctor:'钟南山',
                        photo:'http://5b0988e595225.cdn.sohucs.com/images/20191112/66edc967bed44dd98ae54ab5640320e1.jpeg',
                        allNum: 20,
                        currentNum: 12,
                    }
                ]
                
            }
        ],
        success: {
            text:'恭喜你, 报到成功!',
            note: '请在大厅耐心等候叫好'
        },
        error: {
            text: '对不起，报到失败!',
            note: '原因：未查到挂号信息!'
        }
    }
];



export { registerData,  };