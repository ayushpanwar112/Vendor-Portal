import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  imports: [NgFor, NgIf],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  sortByDropDownOpen = false;
  categoryDropDownOpen = false;
  sortByOptions = [
    'All Products',
    'Popularity',
    'Price: High to Low',
    'Price: Low to High',
    'Discount',
  ];
  selectedOption = 'All Products';
  selectedCategoryOption: string = '';

  toggleDropdown() {
    this.sortByDropDownOpen = !this.sortByDropDownOpen;
  }
  toggleCategoryDropdown() {
    this.categoryDropDownOpen = !this.categoryDropDownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.sortByDropDownOpen = false;
  }

  selectCategoryOption(option: string) {
    this.selectedCategoryOption = option;
    this.categoryDropDownOpen = false;
  }

  products = [
    {
      name: 'Cleaning & Household',
      stockId: 'FNSRM0000048147',
      price: 500,
      stock: 12,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Personal Care',
      stockId: 'FNSRM0000048123',
      price: 300,
      stock: 4,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Groceries',
      stockId: 'FNSRM0000048999',
      price: 250,
      stock: 0,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Cleaning & Household',
      stockId: 'FNSRM0000048147',
      price: 500,
      stock: 7,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Personal Care',
      stockId: 'FNSRM0000048123',
      price: 300,
      stock: 12,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Groceries',
      stockId: 'FNSRM0000048999',
      price: 250,
      stock: 0,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Cleaning & Household',
      stockId: 'FNSRM0000048147',
      price: 500,
      stock: 13,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Personal Care',
      stockId: 'FNSRM0000048123',
      price: 300,
      stock: 3,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Groceries',
      stockId: 'FNSRM0000048999',
      price: 250,
      stock: 18,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Personal Care',
      stockId: 'FNSRM0000048123',
      price: 300,
      stock: 3,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Groceries',
      stockId: 'FNSRM0000048999',
      price: 250,
      stock: 18,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
  ];

  filters = [
    {
      title: 'Division',
      options: [
        {
          id: 'red',
          label: 'readsd',
        },
        {
          id: 'red',
          label: 'read',
        },
        {
          id: 'red',
          label: 'readsafssdd',
        },
        {
          id: 'red',
          label: 'reasdfd',
        },
        {
          id: 'red',
          label: 'red',
        },
        {
          id: 'red',
          label: 'red',
        },
      ],
    },
    {
      title: 'Category',
      options: [
        {
          id: 'red',
          label: 'red',
        },
        {
          id: 'red',
          label: 'red',
        },
      ],
    },
    {
      title: 'Sub Category',
      options: [
        {
          id: 'red',
          label: 'red',
        },
      ],
    },
    {
      title: 'Brand',
      options: [
        {
          id: 'red',
          label: 'red',
        },
      ],
    },
    {
      title: 'Brand',
      options: [
        {
          id: 'red',
          label: 'red',
        },
      ],
    },
    {
      title: 'Brand',
      options: [
        {
          id: 'red',
          label: 'red',
        },
      ],
    },
    {
      title: 'Brand',
      options: [
        {
          id: 'red',
          label: 'red',
        },
      ],
    },
    {
      title: 'Brand',
      options: [
        {
          id: 'red',
          label: 'red',
        },
      ],
    },
    {
      title: 'Brand',
      options: [
        {
          id: 'red',
          label: 'red',
        },
      ],
    },
    {
      title: 'Brand',
      options: [
        {
          id: 'red',
          label: 'red',
        },
      ],
    },
    {
      title: 'Brand',
      options: [
        {
          id: 'red',
          label: 'red',
        },
      ],
    },
  ];
}
