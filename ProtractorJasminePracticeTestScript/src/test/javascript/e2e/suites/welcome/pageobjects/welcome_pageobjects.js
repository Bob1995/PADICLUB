var WelcomePageObject=function(){
 this.logADiveTab=$('[ng-click="vm.gotoLogADive($event)"]')
 this.viewProfileTab=$('[ng-click="vm.gotoProfile($event)"]')
 this.locateDiveShopandSiteTab=$('[ng-click="vm.gotoSearch($event)"]')
 this.populateActivityTab=$('[ng-click="vm.gotoActivity($event)"]')
 this.activityFeedCard=element(by.reapeter('activity in vm.activityDataArray | limitTo: vm.feedLim'))
 this.likeToFeedCard=element(by.model('likes'))
 this.commentToFeedCard=element(by.model('comments'))
 this.commentTab=$('[heading="comments"]')
 this.likeTab=$('[heading="LIKES"]')
 this.goProfilePageLink=$('[ng-click="vm.goProfilePage($event)"]')
 this.typeCommentText=element(by.model('newComment.text'))
 this.postButton=$('[ng-click="saveComment(newComment.text);"]')
 this.closeTab=$('[ng-click="cancel()"]')
 this.clickOnImage=$('[ng-click="open(activitymedia, $index,mediatype)"]')
 this.rightIconArrow=$('[ng-click="nextMedia();"]')
 this.leftIconArrow=$('[ng-click="previousMedia()"]')

}
module.exports=WelcomePageObject