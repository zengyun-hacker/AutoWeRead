"auto";
//打开一本书
function openBook() {
    toastLog("当前界面：" + currentActivity());
    if (currentActivity() == "com.tencent.weread.ReaderFragmentActivity") {
        toastLog("已经在阅读界面");
        return;
    } else if (currentActivity() == "com.tencent.weread.WeReadFragmentActivity") {
        //在主界面，先点一下左下角
        click(100, 3000);
        toastLog("在书架界面，打开明朝的那些事儿");
        className("android.view.ViewGroup").desc("明朝那些事儿（全集）").clickable(true).findOne().click()
    } else {
        toastLog("不在阅读界面，先放着吧");
    }
}

//自动阅读
function autoRead() {
    //先点击中间一下
    sleep(1000);
    while (true) {
        var x = random(0, 50);
        var y = random(0, 1000);
        var randomSwipeTime = random(1000, 2000);
        swipe(720, 1600, 720 + x, 1600 - y, randomSwipeTime);
        var sleepTime = random(30000, 60000); //在 30s和 1 分钟直接随机 sleep 一下
        toastLog("滑动结束，等待 " + sleepTime / 1000 + " 秒");
        sleep(sleepTime);
    }
}


//打开微信读书
var weReadAppName = "微信读书";
launchApp(weReadAppName);
toastLog("打开微信读书");

setScreenMetrics(1440, 3200);

openBook();

autoRead();