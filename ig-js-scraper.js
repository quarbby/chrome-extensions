/* 
* JS to scrape Instagram public profiles 
* Currently: Only testing in console with page opened 
* Perhaps may make into Chrome extension
*/

// Click the Load More button 
loadBtn = document.getElementsByClassName('_oidfu')[0];
loadBtn.click();

imageList = [];

imgs = document.getElementsByTagName('img');
imageList.append(imgs);

// To find one image src/ alt
singleImg = imageList[0];
console.log(singleImg.src);
console.log(singleImg.alt);

while(true) {
    window.scrollTo(0, document.body.scrollHeight);
    
    // Usually they add another 12 images
    // Append the unappended images 
    // TODO: Get total number of images from header then stop when images.length collected matches 
    imgs = document.getElementsByTagName 
    newImgs = imgs.slice(imageList.length, imgs.length);
    imageList.append(newImgs);
}