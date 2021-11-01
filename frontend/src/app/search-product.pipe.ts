import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(stock: any[], query: any[]): any {

    if (!stock || !query) {
      return stock;
  }
  // filter items array, items which match and return true will be
  // kept, false will be filtered out
  return stock.filter(item => item.product_name.indexOf(query) !== -1);
}
  }


