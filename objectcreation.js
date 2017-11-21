//this is to create object and do CRUD operations

var channels=[];
var users = [];

var channel = {};
var user={};


channel.stackroute={};
channels.push(channel);
channel.stackroute.followers=[];
channel.stackroute.activities=[];

user.admin={};
user.admin.activities = [];
users.push(user);

//1. to add users to a channel   /channels/:[channel_name]/followers/:[user_name]

function addUserstoChannel(chnlname,usrname)
{
  if(channel.hasOwnProperty(chnlname))
  {
    console.log("channel name exists");
    // checking if user is already existing
    if(users.hasOwnProperty(usrname)){
      channel[chnlname].followers.push(usrname);
    }else{
      user[usrname]={};
      user[usrname].activities=[];
    }
    channel[chnlname].followers.push(usrname);
    console.log("username added");
      for(var i in channel){
        console.log("channel name " + i); // alerts key
        console.log(channel[i]); //alerts key's value
}
    console.log("added username is "+ channel[chnlname].followers);
    }
}

addUserstoChannel('stackroute','Amisha');
addUserstoChannel('stackroute','Jayaprasad');

console.log("******************************************************************************");
//2. to send activities to channel	/channels/:[channel_name]/activities

function addActivityToChannel(chnlname,msg){

  if(channel.hasOwnProperty(chnlname))
  {
    console.log("channel name exists");
    channel[chnlname].activities.push(msg);
    console.log("message is added");
    //  for(var i in channel)
      //  console.log("channel name " + i); // alerts key
      //  console.log(channel[i]); //alerts key's value
        for(var i in channel[chnlname].followers){
        user[channel[chnlname].followers[i]].activities.push(msg);
        }


   }


}

addActivityToChannel('stackroute','good morning all');
addActivityToChannel('stackroute','good afternoon all');

console.log("******************************************************************************");

//3. to send activities to user   /users/:[user_name]/activities

function addActivityToUser(usrnme,msg){

  if(user.hasOwnProperty(usrnme)){
    user[usrnme].activities.push(msg);
  }else{ console.log("user does not exist");}
console.log('activity added to user');
}

addActivityToUser('Amisha',"Good Morning Amisha");
console.log("******************************************************************************");

//4. to retrieve activities history of a user   /users/:[user_name]/activities

function getActivitiesOfUser(usrnme){
      console.log("displaying messages of "+usrnme);
      if(user.hasOwnProperty(usrnme)){
        for(var i in user[usrnme].activities){
          console.log(user[usrnme].activities[i]);
        }
      }else{ console.log("user does not exist");}


}

getActivitiesOfUser('Amisha');
getActivitiesOfUser('Jayaprasad');
/*
//to display all followers of channel

function displayFollowersOfChnl(chnlname){
    if(channel.hasOwnProperty(chnlname)){
      console.log(channel[chnlname].followers);
      for(var i in channel[chnlname].followers){
        console.log(channel[chnlname].followers[i]);
      }
    }
}


displayFollowersOfChnl('stackroute');*/
