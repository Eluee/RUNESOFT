<template>
  <div class="nav-background"></div>
  <div class="search-body">
    <div class="search-ct">
      <div class="search-main">
        <input type="text" class="search-main-input" />
      </div>
      <button class="search-button">검색</button>
      <div class="fillter-ct">
        <button class="fillter-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="fillter-svg"
          >
            <path
              d="M14.6666 2H1.33325L6.66658 8.30667V12.6667L9.33325 14V8.30667L14.6666 2Z"
              fill="white"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="fillter-svg"
            />
          </svg>
          <p>전체</p>
        </button>
        <div class="fillter-icon">
          <p>테스트</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-background {
  width: 100%;
  height: 40px;
  background-color: black;
}
.search-body {
  position: relative;
  width: 100%;
  height: 250px;
}
.search-ct {
  position: relative;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
  max-width: 600px;
  height: 200px;
}
.search-main {
  position: relative;
  width: 100%;
  background: #ffffff;
  border: 1px solid #2697ff;
  border-radius: 40px;
  height: 60px;
}
.search-main-input {
  position: relative;
  width: 90%;
  height: 100%;
  border: none;
  background: none;
  outline: none;
}
.search-button {
  position: absolute;
  width: 70px;
  height: 50px;
  left: 0px;
  background: #474d61;
  border-radius: 25px;
  border: none;
  color: white;
  top: 75px;
}
.fillter-ct {
  position: absolute;
  top: 80px;
  right: 0px;
  width: 50%;
  height: 100px;
}
.fillter-icon {
  position: relative;
  width: 80px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #474d61;
  border-radius: 20px;
  margin-left: 4px;
  margin-bottom: 4px;
  float: right;
  display: flex;
  justify-content: center;
}
.fillter-icon > * {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: #474d61;
}
</style>
