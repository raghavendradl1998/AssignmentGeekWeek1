var g_class ={
    'name':"Dec21Geekester",
    'instructor':{
        'name':"Raghavendra",
        'subject':"MERN"

    },
    'students':[{
        'name':'Raghavendra',
        'marks':80,
    },
    {
        'name':'Raghu',
        'marks':85,
    },
    {
        'name':'Raju',
        'marks':89
    },
    {
        'name':'Raghu',
        'marks':90
    },
    {
        'name':'Ram',
        'marks':75,
    },
    {
        'name':'Ramu',
        'marks':96
    },
],
};

for(var i = 0; i< g_class.students.length;i++){
    if(g_class.students[i].marks > 85)
        console.log(g_class.students[i].name);
}