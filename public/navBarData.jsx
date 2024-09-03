export const menuItems = [
    {
        title: "Home",
        path:"/home"
    },
    {
        title: "Teams",
        path:"/teams",
        children: [
            {
                title: "Frontend",
                path:"/teams/frontend"
            },
            {
                title: "Backend",
                path:"/teams/backend",
                children: [
                    {
                        title: "Paas",
                        path:"/teams/backend/paas",
                    }, {
                        title: "Saas",
                        path:"/teams/backend/saas",
                        children:[
                            {
                                title:"BE SAAS A",
                                path:"/teams/backend/saas",
                            },
                            {
                                title:"BE SAAS B",
                                path:"/teams/backend/saas",
                            },
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "About",
        path:"/about",
        children:[
            {
                title:"Travel",
                path:"/about/travel",
                children:[
                    {
                        title:"Flights",
                        path:"/about/flights",

                        children:[
                            {
                                title:"Domestic",
                                path:"/about/flights",
                            },{
                                title:"International",
                                path:"/about/flights",
                            }
                        ]
                    },{
                        title:"Hotels",
                        path:"/about/hotels",
                    }
                ]
            },
            {
                title:"P2P",
                path:"/about/p2p"
            },
            {
                title:"Finance",
                  path:"/about/finance"
            },
            {
                title:"Reimbursement",
                  path:"/about/reimbursement"
            },
        ]
    }, {
        title: "Contact"
    }
];