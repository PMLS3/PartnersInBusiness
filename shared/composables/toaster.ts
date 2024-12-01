import type { Toaster } from "#components"
import type {
  DefaultProps,
  NinjaToasterBaseProps,
} from "@cssninja/nuxt-toaster"

// This type infer the props of TairoToaster component
type ToasterProps = Omit<
  InstanceType<typeof Toaster>["$props"],
  keyof DefaultProps
>

export function useToaster() {
  const $nt = useNinjaToaster()

  /**
   * Display a TairoToaster component
   */
  function show(props: ToasterProps, options?: NinjaToasterBaseProps) {
    return $nt.showComponent("Toaster", {
      props,
      options,
    })
  }

  return {
    show,
    clear: $nt.clear,
    clearAll: $nt.clearAll,
  }
}
