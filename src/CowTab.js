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

  searchItem(value) {
    let $article = document.getElementById("Article");
    if ($article != null) {
      $article.remove();
    }

    this.$mainDiv.appendChild(this.setArticle(value));
  }

  getData(item) {
    const $item = document.createElement("div");
    let itemInfo = this.data[item];

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

    return $item;
  }

  setArticle(value) {
    const $article = document.createElement("article");
    $article.className = "Article";
    $article.id = "Article";

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
      if (item.includes(value)) {
        $article.appendChild(this.getData(item));
      }
    }

    return $article;
  }

  render() {
    const $tabTitle = document.createElement("h2");
    $tabTitle.className = "TabTitle";
    $tabTitle.innerText = "CowTab";

    const $test = document.createElement("span");
    const $input = document.createElement("input");
    $input.type = "text";
    $input.oninput = function () {
      $test.innerHTML = $input.value;
    };

    $tabTitle.appendChild($input);
    $tabTitle.appendChild($test);

    let $article = this.setArticle("");

    this.$mainDiv.appendChild($tabTitle);
    this.$mainDiv.appendChild($article);
  }
}
