function Footer() {
return(
    <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        <div>
            <h3 class="text-lg font-semibold mb-4">About Us</h3>
            <p class="text-sm text-gray-400">
                We are a leading company delivering high-quality solutions and services to our clients worldwide.
            </p>
        </div>
        
       
        <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-gray-200">Home</a></li>
                <li><a href="#" class="text-gray-400 hover:text-gray-200">Services</a></li>
                <li><a href="#" class="text-gray-400 hover:text-gray-200">About Us</a></li>
                <li><a href="#" class="text-gray-400 hover:text-gray-200">Contact</a></li>
            </ul>
        </div>
        

        <div>
            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
            <p class="text-sm text-gray-400">1234 Elm Street, Some City, ST 56789</p>
            <p class="text-sm text-gray-400 mt-2">Email: <a href="mailto:info@company.com" class="hover:text-gray-200">info@company.com</a></p>
            <p class="text-sm text-gray-400 mt-2">Phone: <a href="tel:+1234567890" class="hover:text-gray-200">+1 234 567 890</a></p>
        </div>
    </div>
    
    <div class="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        <p>© 2024 Your Company. All rights reserved.</p>
    </div>
</footer>
)

}

export default Footer;