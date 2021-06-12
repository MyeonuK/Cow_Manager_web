class CowTab extends Tab {
  $mainDiv = null;
  data = null;

  constructor($target, data) {
    super($target, data);
    this.data = data;

    const $mainDiv = document.createElement("div");
    $mainDiv.className = "CowDiv";

    this.$mainDiv = $mainDiv;
    $target.appendChild(this.$mainDiv);

    this.render();
  }

  pushData($target, item, itemInfo) {
    const $item = document.createElement("div");
    $item.className = "item";
    $item.innerHTML = `
        <a class="Item_AnimalNo" href="https://www.mtrace.go.kr/mtracesearch/cattleNoSearch.do?btsProgNo=0109008401&btsActionMethod=SELECT&cattleNo=${item}"">${item}</a>
        <span class="Info_Group">
          <span class="Item_Info">${itemInfo.HouseNo}번 축사</span>
          <span class="Item_Info">${itemInfo.CageNo}번 우리</span>
        </span>
        <span class="Info_Group">
          <span class="Item_Info">${itemInfo.Sex}</span>
          <span class="Item_Info">${itemInfo.BirthDate}</span>
        </span>
        <span class="Info_Group">
          <span class="Item_Info">${itemInfo.FamInfo}</span>
          <span class="Item_Info">${itemInfo.FamDate}</span>
        </span>
        <span class="Info_Group">
          <span class="Item_Info">${itemInfo.BruInfo}</span>
          <span class="Item_Info">${itemInfo.BruDate}</span>
        </span>
        <span class="Info_Group">
          <span class="Item_Info">${itemInfo.TubeInfo}</span>
          <span class="Item_Info">${itemInfo.TubeDate}</span>
        </span>`;

    $target.appendChild($item);
  }

  render() {
    const $tabTitle = document.createElement("h2");
    $tabTitle.className = "TabTitle";
    $tabTitle.innerText = "CowTab";

    const $input = document.createElement("input");
    $input.type = "text";
    $input.value = "number";
    $input.setAttribute(onchange, "ccc(this)");
    $tabTitle.appendChild($input);

    const $article = document.createElement("article");
    $article.className = "Article";

    const $itemTitle = document.createElement("div");
    $itemTitle.className = "Item";
    $itemTitle.innerHTML = `
    <span class="Item_AnimalNo">등록번호</span>
    <span class="Info_Group">
      <span class="Item_Info">축사 및 우리</span>
    </span>
    <span class="Info_Group">
      <span class="Item_Info">성별</span>
      <span class="Item_Info">생년월일</span>
    </span>
    <span class="Item_Info">구제역</span>
    <span class="Item_Info">브루셀라</span>
    <span class="Item_Info">결핵</span>`;
    $article.appendChild($itemTitle);

    let cowList = Object.keys(this.data);
    for (let item of cowList) {
      this.pushData($article, item, this.data[item]);
    }

    this.$mainDiv.appendChild($tabTitle);
    this.$mainDiv.appendChild($article);
  }
}
