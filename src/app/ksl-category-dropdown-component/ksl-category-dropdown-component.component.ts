import { Component, OnInit } from '@angular/core';
import { KSLFeedService }              from '../ksl-feed-service.service'

export class KSLCategory {
  category: string;
  name: string;
  cat: string;
  optgroup:boolean;
}

const CATEGORIES: KSLCategory[] = [{"name":"All","category":"-1","cat":"-1","optgroup":true}, {"name":"Announcements","category":"1","cat":"-1","optgroup":true},{"name":"Appliances","category":"344","cat":"-1","optgroup":true},{"name":"Auto Parts and Accessories","category":"100","cat":"-1","optgroup":true},{"name":"Baby ","category":"350","cat":"-1","optgroup":true},{"name":"Books and Media","category":"352","cat":"-1","optgroup":true},{"name":"Clothing and Apparel","category":"348","cat":"-1","optgroup":true},{"name":"Computers","category":"16","cat":"-1","optgroup":true},{"name":"Electronics","category":"345","cat":"-1","optgroup":true},{"name":"Hunting and Fishing","category":"353","cat":"-1","optgroup":true},{"name":"For Trade or Barter","category":"252","cat":"-1","optgroup":true},{"name":"FREE","category":"349","cat":"-1","optgroup":true},{"name":"Furniture","category":"40","cat":"-1","optgroup":true},{"name":"General","category":"63","cat":"-1","optgroup":true},{"name":"Home and Garden","category":"51","cat":"-1","optgroup":true},{"name":"Industrial","category":"94","cat":"-1","optgroup":true},{"name":"Other Real Estate","category":"523","cat":"-1","optgroup":true},{"name":"Outdoors and Sporting","category":"184","cat":"-1","optgroup":true},{"name":"Pets and Livestock","category":"104","cat":"-1","optgroup":true},{"name":"Recreational Vehicles","category":"142","cat":"-1","optgroup":true},{"name":"Toys","category":"351","cat":"-1","optgroup":true}];

@Component({
  selector: 'app-ksl-category-dropdown-component',
  templateUrl: './ksl-category-dropdown-component.component.html',
  styleUrls: ['./ksl-category-dropdown-component.component.css'],
  providers: [KSLFeedService]
})

export class KslCategoryDropdownComponentComponent implements OnInit {

  constructor(private kslFeedService: KSLFeedService) { }
  private selectedCategory;
  categories = CATEGORIES;
  connection;

  updateCategory(categoryID) : void{
    this.selectedCategory = categoryID;
    this.kslFeedService.changeCategory(this.selectedCategory);
  }

  ngOnInit() {
    this.connection = this.kslFeedService.getCategoryObservable().subscribe(message => {
      console.log(message)
    })
  }

}
