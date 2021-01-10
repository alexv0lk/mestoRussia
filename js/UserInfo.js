class UserInfo{
    setUserInfo(nameInfo, jobInfo, nameEditInput, myselfEditInput){
        nameEditInput.value = nameInfo.textContent;
        myselfEditInput.value = jobInfo.textContent;
    }
    updateUserInfo(nameInfo, jobInfo, nameEditInput, myselfEditInput){
        event.preventDefault();
        nameInfo.textContent = nameEditInput.value;
        jobInfo.textContent = myselfEditInput.value;
    }
}
