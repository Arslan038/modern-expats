<template>
    <footer class="bg-secondary text-secondary-foreground py-12 border-t border-secondary-light">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="col-span-1 md:col-span-2">
                    <div class="flex items-center space-x-3 mb-2">
                        <img src="/logo.png" width="140" alt="Modern Expats" />
                    </div>
                    <p class="font-body text-secondary-foreground/80 leading-relaxed mb-4 max-w-md">
                        A movement of nomads, expats, and dreamers proving the world is one home. Join us and live
                        borderless.
                    </p>
                    <div class="flex space-x-4">
                        <div
                            class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                            <a href="https://www.instagram.com/modern.expats" target="_blank">
                                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.909c0-.867.242-1.491 1.501-1.491h2.499v-4h-3.5c-4.012 0-4.499 3.194-4.5 7.279v2.721z" />
                                </svg>
                            </a>
                        </div>
                        <div
                            class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                            <a href="https://www.instagram.com/modern.expats" target="_blank">
                                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.205 0-3.584-.012-4.849-.069-3.251-.148-4.771-1.691-4.919-4.919-.058-1.265-.068-1.644-.068-4.849 0-3.204.012-3.584.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="font-display font-bold text-lg text-secondary-foreground mb-4">Services</h3>
                    <ul class="space-y-2 font-body text-secondary-foreground/80">
                        <li class="hover:text-primary transition-colors cursor-pointer">Digital Nomad Visas</li>
                        <li class="hover:text-primary transition-colors cursor-pointer">Visitor Visas</li>
                        <li class="hover:text-primary transition-colors cursor-pointer">Travel Consulting</li>
                        <li class="hover:text-primary transition-colors cursor-pointer">Document Review</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-display font-bold text-lg text-secondary-foreground mb-4">Contact</h3>
                    <ul class="space-y-2 font-body text-secondary-foreground/80">
                        <li>modernexpats@gmail.com</li>
                        <li>+1 (555) 123-4567</li>
                        <li>24/7 Support Available</li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-secondary-light mt-8 pt-8 text-center">
                <p class="font-body text-secondary-foreground/60">© {{ new Date().getFullYear() }} Modern Expats. All
                    rights reserved. | Privacy
                    Policy | Terms of Service</p>
            </div>
        </div>
    </footer>
</template>
