import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = auth();
  let user;

  try {
    user = await currentUser();
  } catch (error) {
    console.error("Failed to fetch current user:", error);
    return (
      <div>
        <h1>Error occurred while fetching user data</h1>
        <p>Please try again later.</p>
      </div>
    );
  }

  if (!userId || !user) {
    return <div>you are not logged in</div>;
  }

  return (
    <div>
      <section className="w-full h-[500px] relative overflow-hidden">
        <img
          src="/placeholder.svg"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-6 px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Discover Our Curated Collection
          </h1>
          <p className="max-w-[600px] text-lg md:text-xl">
            Explore our wide range of high-quality products, carefully selected
            to meet your needs.
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Shop Now
          </Link>
        </div>
      </section>
      <nav className="bg-white dark:bg-gray-950 shadow-sm">
        <div className="container px-4 md:px-6 flex items-center justify-center space-x-6 py-4">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            All Products
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Clothing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Accessories
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Electronics
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Home & Garden
          </Link>
        </div>
      </nav>
      <section className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Collection 1"
              width={500}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl">Summer Collection</h3>
              <p className="text-sm text-gray-500">
                Embrace the season in style
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Collection 2"
              width={500}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl">Winter Essentials</h3>
              <p className="text-sm text-gray-500">Stay warm and cozy</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Collection 3"
              width={500}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl">Tech Gadgets</h3>
              <p className="text-sm text-gray-500">Upgrade your tech</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 md:px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Category 1"
              width={500}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl">Clothing</h3>
              <p className="text-sm text-gray-500">
                Discover the latest fashion
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Category 2"
              width={500}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl">Electronics</h3>
              <p className="text-sm text-gray-500">Upgrade your tech</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Category 3"
              width={500}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl">Home & Garden</h3>
              <p className="text-sm text-gray-500">Upgrade your living space</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Category 4"
              width={500}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl">Accessories</h3>
              <p className="text-sm text-gray-500">Elevate your style</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 md:px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Product 1"
              width={500}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl">Classic T-Shirt</h3>
              <p className="text-sm text-gray-500">Soft and comfortable</p>
              <h4 className="font-semibold text-lg md:text-xl">$29.99</h4>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Product 2"
              width={500}
              height={400}
              className="object-cover w-full h-64"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
