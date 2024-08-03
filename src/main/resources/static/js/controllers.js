angular.module('dashboardApp')
    .controller('MainController', ['$scope', function ($scope) {
        $scope.message = 'Upload your identity card here.';
    }])
    .controller('GuideController', ['$scope', function ($scope) {
        $scope.message = 'Upload your identity card here.';
    }])
    .controller('UploadController', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
        $scope.notifyMessage = '';
        $scope.result = '';
        $scope.existingData = null; // Khởi tạo biến lưu trữ dữ liệu existing
        $scope.currentData = null; // Khởi tạo biến lưu trữ dữ liệu current

        $scope.fileChanged = function (element) {
            $scope.$apply(function () {
                $scope.file = element.files[0]; // Gán tệp tin từ phần tử input
            });
        };

        $scope.uploadFile = function () {
            if (!$scope.file) {
                $scope.notifyMessage = 'No file selected!';
                return;
            }

            let formData = new FormData();
            formData.append('file', $scope.file);

            $http.post('/api/process-upload', formData, {
                headers: {
                    'Content-Type': undefined // Để AngularJS tự thiết lập Content-Type
                },
                transformRequest: angular.identity
            }).then(function (response) {
                $scope.notifyMessage = response.data.message || '';
                if (response.data.detections) {
                    loadRecord(response.data.detections[0].message, response.data.current_data);
                }
            }).catch(function (error) {
                $scope.notifyMessage = 'Error: ' + (error.data.message || error.message);
                $scope.result = '';
            });
        };

        function loadRecord(existingData, currentData) {
            // Lưu trữ dữ liệu vào $scope
            $scope.existingData = existingData;
            $scope.currentData = currentData;
        }

        $scope.useData = function (type) {
            let data;
            if (type === 'existing') {
                data = $scope.existingData;
            } else if (type === 'current') {
                data = $scope.currentData;
            }

            if (data) {
                $http.post('/api/add-card', data)
                    .then(function (response) {
                        $scope.notifyMessage = 'Data has been successfully updated!';
                    }).catch(function (error) {
                        $scope.notifyMessage = 'Error: ' + (error.data.message || error.message);
                    });
            }
        };
    }])
    .controller('UploadHandleController', ['$scope', '$http', function ($scope, $http) {
        $scope.formData = {};
        $scope.notification = '';

        $scope.submitForm = function () {
            $http.post('/api/add-card', $scope.formData)
                .then(function (response) {
                    var data = response.data;
                    if (data.status === 'success') {
                        $scope.notification = 'Thông tin đã được lưu thành công!';
                        $scope.formData = {}; // Clear form data
                    } else {
                        $scope.notification = 'Đã xảy ra lỗi: ' + data.message;
                    }
                })
                .catch(function (error) {
                    $scope.notification = 'Đã xảy ra lỗi: ' + error.data;
                });
        };
    }])
    .controller('CheckController', ['$scope', function ($scope) {
        $scope.message = 'Check the information of your identity card.';
    }])
    .controller('ListController', ['$scope', '$http', function ($scope, $http) {
        $scope.cards = [];
        $scope.notification = '';
    
        // Hàm để tải danh sách thẻ từ server
        function loadCards() {
            $http.get('/api/cards')
                .then(function (response) {
                    $scope.cards = response.data;
                    if ($scope.cards.length === 0) {
                        $scope.notification = 'Không có dữ liệu nào được tải lên.';
                    } else {
                        $scope.notification = '';
                    }
                })
                .catch(function (error) {
                    $scope.notification = 'Đã xảy ra lỗi khi tải dữ liệu: ' + error.message;
                });
        }
    
        // Gọi hàm loadCards khi controller khởi tạo
        loadCards();
    
        // Hàm để xóa thẻ
        $scope.remove = function (idPassport) {
            $http.post('/api/delete-card/' + idPassport)
                .then(function (response) {
                    $scope.notification = 'Thẻ đã được xóa thành công.';
                    console.log('Card deleted successfully:', response.data);
    
                    // Tải lại danh sách thẻ sau khi xóa thành công
                    loadCards();
                })
                .catch(function (error) {
                    $scope.notification = 'Lỗi khi xóa thẻ: ' + error.message;
                    console.error('Error deleting card:', error);
                });
        };
    }]);
