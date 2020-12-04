const { makeAutoObservable, when } = require("mobx");

class FiltersStore {
  constructor() {
    this.filters = {};
    this.filtersNumber = 0;
    when(
      () => !this.filtersNumber,
      () => this.clearFilters()
    );
    makeAutoObservable(this);
  }

  toggleFilter(stopsNumber) {
    this.filters[stopsNumber] = !this.filters[stopsNumber];
    if (this.filters[stopsNumber] === false) this.filtersNumber--;
    else this.filtersNumber++;
  }

  clearFilters() {
    this.filters = {};
    this.filtersNumber = 0;
  }
}

export default FiltersStore;
