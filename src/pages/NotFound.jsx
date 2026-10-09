import { ArrowRight } from 'lucide-react'
import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import WhatsAppButton from '../components/ui/WhatsAppButton'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | Minnal Travels" description="The page you are looking for could not be found." noindex />
      <PageHeader
        title="Looks like a wrong turn"
        subtitle="We couldn't find the page you were looking for. Let's get you back on the road."
        breadcrumbs={[{ label: 'Page not found' }]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/tours" variant="primary">
            Explore Tours <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Button>
          <WhatsAppButton />
        </div>
      </PageHeader>
    </>
  )
}
