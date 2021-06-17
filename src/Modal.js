class Modal {
  $modal = null;

  constructor($target) {
    const $modal = document.createElement("div");
    $modal.className = "Modal";

    this.$modal = $modal;
    $target.appendChild(this.$modal);
  }

  show(title, data) {
    this.title = title;
    this.data = data;

    this.$modal.style.display = "flex";
  }

  hide() {
    this.$modal.style.display = "none";
  }

  render() {
    const $modal_window = document.createElement("div");
    $modal_window.className = "Modal_Window";

    const $modal_title = document.createElement("div");
    $modal_title.className = "Modal";

    let keyArr = Object.keys(data);

    for (let key of keyArr) {
      let $elementTitle = document.createElement("");
    }

    this.$modal.appendChild($modal_window);
  }
}
