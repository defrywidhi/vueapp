new Vue({
    el: '#app',
    data: {
        newItemName: '',
        newItemPrice: '',
        newItemQuantity: '',
        computers: []
    },
    methods: {
        addItem: function () {
            if (this.newItemName.trim() === '' || this.newItemPrice <= 0 || this.newItemQuantity <= 0) return;
            this.computers.push({
                name: this.newItemName,
                price: parseFloat(this.newItemPrice).toFixed(2),
                quantity: parseInt(this.newItemQuantity)
            });
            this.newItemName = '';
            this.newItemPrice = '';
            this.newItemQuantity = '';
        },
        editComputer: function (index) {
            // Set the 'editing' flag to true for the selected computer
            this.$set(this.computers[index], 'editing', true);
            // Initialize 'updatedName', 'updatedPrice', and 'updatedQuantity' with current values
            this.$set(this.computers[index], 'updatedName', this.computers[index].name);
            this.$set(this.computers[index], 'updatedPrice', this.computers[index].price);
            this.$set(this.computers[index], 'updatedQuantity', this.computers[index].quantity);
        },

        updateComputer: function (index) {
            // Update the computer with the new values from the form
            this.computers[index].name = this.computers[index].updatedName;
            this.computers[index].price = parseFloat(this.computers[index].updatedPrice).toFixed(2);
            this.computers[index].quantity = parseInt(this.computers[index].updatedQuantity);
            // Set the 'editing' flag to false to exit edit mode
            this.computers[index].editing = false;
        },

        confirmDelete: function (index) {
            const confirmDelete = confirm('Are you sure you want to delete this?');
            if (confirmDelete) {
                this.deleteComputer(index);
            }
        },
        deleteComputer: function (index) {
            this.computers.splice(index, 1);
        }
    }
});
