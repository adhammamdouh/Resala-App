export interface TabProperty {
  //addFormName: string;
  selectedTabIndex: number
  tabs: Tab[]
}

export interface Tab {
  name: string,
  index: number;
}
